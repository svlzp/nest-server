import { AppModule } from './app.module'
import { ms, StringValue } from './libs/common/utils/ms.util'
import { parseBoolean } from './libs/common/utils/parse-boolean.util'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import RedisStore from 'connect-redis'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import IORedis from 'ioredis'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = app.get(ConfigService)

    // Настройка Redis с поддержкой TLS для Heroku
    const redisUrl = config.getOrThrow('REDIS_URL')
    const redis = new IORedis(redisUrl, {
        tls: redisUrl.startsWith('rediss://') ? {
            rejectUnauthorized: false
        } : undefined,
        maxRetriesPerRequest: 3,
        enableReadyCheck: true,
        reconnectOnError: (err) => {
            const targetErrors = ['READONLY', 'ECONNRESET', 'ETIMEDOUT'];
            return targetErrors.some(targetError => err.message.includes(targetError));
        }
    })
    
    app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')))
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true
        })
    )
    const sessionMaxAge = ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE'))
    const swaggerConfig = new DocumentBuilder()
        .setTitle('CNC Management API')
        .setDescription(
            'API для управления инструментами, станками и работами с поддержкой загрузки файлов'
        )
        .setVersion('1.0.0')
        .addTag('Tools', 'Управление инструментами')
        .addTag('Machine CNC', 'Управление станками')
        .addTag('Work Overnight', 'Управление работами')
        .addTag('Files', 'Управление файлами')
        .addTag('Auth', 'Аутентификация и авторизация')
        .addCookieAuth('session', {
            type: 'apiKey',
            in: 'cookie',
            name: config.getOrThrow<string>('SESSION_NAME')
        })
        .build()
    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('api/docs', app, document)
    app.use(
        session({
            secret: config.getOrThrow<string>('SESSION_SECRET'),
            name: config.getOrThrow<string>('SESSION_NAME'),
            resave: true,
            saveUninitialized: false,
            cookie: {
                domain: config.getOrThrow<string>('SESSION_DOMAIN'),
                maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
                httpOnly: parseBoolean(config.getOrThrow('SESSION_HTTP_ONLY')),
                secure: parseBoolean(config.getOrThrow('SESSION_SECURE')),
                sameSite: 'lax'
            },
            store: new RedisStore({
                client: redis,
                prefix: config.getOrThrow<string>('SESSION_FOLDER'),
                ttl: Math.floor(sessionMaxAge / 1000),
                disableTouch: true
            })
        })
    )
    app.enableCors({
        origin: config.getOrThrow<string>('ALLOWED_ORIGINS'),
        credentials: true,
        exposedHeaders: ['set-cookie']
    })
    const port =
        config.get<number>('PORT') ||
        config.get<number>('APPLICATION_PORT') ||
        4000
    await app.listen(port)
}
void bootstrap()
