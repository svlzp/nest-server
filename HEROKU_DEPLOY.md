# Деплой на Heroku - Пошаговая инструкция

## Предварительные требования

1. Установите [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Зарегистрируйтесь на [Heroku](https://heroku.com)
3. Установите Git (если еще не установлен)

## Шаг 1: Подготовка проекта

### 1.1. Убедитесь, что файлы созданы:

✅ `Procfile` - уже создан
✅ `package.json` - обновлен с необходимыми скриптами

### 1.2. Создайте .gitignore (если еще нет):

```
node_modules/
dist/
.env
.env.local
uploads/
coverage/
```

## Шаг 2: Инициализация Git репозитория

```bash
# Перейдите в папку проекта
cd d:\nest_server\server_nestjs

# Инициализируйте Git (если еще не инициализирован)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit for Heroku deployment"
```

## Шаг 3: Логин в Heroku

```bash
# Войдите в Heroku через CLI
heroku login
```

Это откроет браузер для авторизации.

## Шаг 4: Создание приложения на Heroku

```bash
# Создайте новое приложение (замените 'your-app-name' на уникальное имя)
heroku create your-app-name

# Или создайте с автоматическим именем
heroku create
```

## Шаг 5: Добавление PostgreSQL базы данных

```bash
# Добавьте PostgreSQL addon (бесплатный план)
heroku addons:create heroku-postgresql:essential-0

# Проверьте, что база данных создана
heroku addons
```

## Шаг 6: Добавление Redis

```bash
# Добавьте Redis addon
heroku addons:create heroku-redis:mini

# Это автоматически создаст переменную REDIS_URL
```

## Шаг 7: Настройка переменных окружения

```bash
# Установите все необходимые переменные окружения
heroku config:set NODE_ENV=production

# Переменные для приложения
heroku config:set APPLICATION_PORT=\$PORT

# Cookie и Session
heroku config:set COOKIE_SECRET="your-cookie-secret-here"
heroku config:set SESSION_SECRET="your-session-secret-here"
heroku config:set SESSION_NAME="session_id"
heroku config:set SESSION_DOMAIN=".herokuapp.com"
heroku config:set SESSION_MAX_AGE="7d"
heroku config:set SESSION_HTTP_ONLY="true"
heroku config:set SESSION_SECURE="true"
heroku config:set SESSION_FOLDER="sessions:"

# CORS
heroku config:set ALLOWED_ORIGINS="https://your-frontend-domain.com"

# OAuth (Google)
heroku config:set GOOGLE_CLIENT_ID="your-google-client-id"
heroku config:set GOOGLE_CLIENT_SECRET="your-google-client-secret"
heroku config:set GOOGLE_REDIRECT_URI="https://your-app-name.herokuapp.com/auth/oauth/callback/google"

# OAuth (GitHub)
heroku config:set GITHUB_CLIENT_ID="your-github-client-id"
heroku config:set GITHUB_CLIENT_SECRET="your-github-client-secret"
heroku config:set GITHUB_REDIRECT_URI="https://your-app-name.herokuapp.com/auth/oauth/callback/github"

# Email (Resend)
heroku config:set EMAIL_HOST="your-email-host"
heroku config:set EMAIL_FROM="noreply@yourdomain.com"
heroku config:set RESEND_API_KEY="your-resend-api-key"

# Database URL (уже создан автоматически)
# POSTGRES_URI будет создан из DATABASE_URL
heroku config:set POSTGRES_URI=\$(heroku config:get DATABASE_URL)

# Redis URI (уже создан автоматически)
# REDIS_URI будет создан из REDIS_URL
heroku config:set REDIS_URI=\$(heroku config:get REDIS_URL)
```

**Важно:** Замените все значения `your-*` на ваши реальные данные!

## Шаг 8: Настройка Prisma для Heroku

Убедитесь, что в `package.json` есть скрипты (уже добавлены):

```json
"postinstall": "prisma generate",
"heroku-postbuild": "npm run build"
```

## Шаг 9: Добавление buildpack для Prisma

```bash
# Добавьте buildpack для установки зависимостей
heroku buildpacks:add heroku/nodejs
```

## Шаг 10: Деплой приложения

```bash
# Отправьте код на Heroku
git push heroku main

# Если ваша ветка называется master, используйте:
# git push heroku master
```

## Шаг 11: Запуск миграций Prisma

```bash
# Запустите миграции базы данных
heroku run npx prisma migrate deploy

# Или используйте prisma db push для быстрой синхронизации
heroku run npx prisma db push
```

## Шаг 12: Проверка приложения

```bash
# Откройте приложение в браузере
heroku open

# Или перейдите по адресу:
# https://your-app-name.herokuapp.com/api/docs (Swagger документация)

# Проверьте логи
heroku logs --tail
```

## Шаг 13: Создание папки для загрузок

Heroku использует эфемерную файловую систему, файлы будут удаляться при рестарте. Для постоянного хранения файлов используйте:

### Вариант 1: AWS S3 (рекомендуется)
Установите пакет:
```bash
npm install @aws-sdk/client-s3 multer-s3
```

### Вариант 2: Cloudinary
```bash
npm install cloudinary multer-storage-cloudinary
```

### Временное решение (не рекомендуется для продакшена):
Для тестирования можно оставить локальную файловую систему, но файлы будут теряться.

## Дополнительные команды

```bash
# Просмотр логов
heroku logs --tail

# Перезапуск приложения
heroku restart

# Запуск команд в Heroku
heroku run bash

# Просмотр переменных окружения
heroku config

# Масштабирование (увеличение количества dyno)
heroku ps:scale web=1

# Просмотр информации о приложении
heroku info
```

## Обновление приложения

После внесения изменений в код:

```bash
# Добавьте изменения
git add .

# Создайте коммит
git commit -m "Update description"

# Отправьте на Heroku
git push heroku main

# Запустите миграции (если изменилась схема БД)
heroku run npx prisma migrate deploy
```

## Отладка проблем

### Проблема: Приложение не запускается

```bash
# Проверьте логи
heroku logs --tail

# Проверьте статус
heroku ps

# Перезапустите
heroku restart
```

### Проблема: Ошибки базы данных

```bash
# Проверьте подключение к БД
heroku pg:info

# Запустите миграции заново
heroku run npx prisma migrate deploy

# Сбросьте БД (ОСТОРОЖНО: удалит все данные!)
heroku pg:reset DATABASE_URL --confirm your-app-name
heroku run npx prisma migrate deploy
```

### Проблема: Ошибки Redis

```bash
# Проверьте статус Redis
heroku redis:info

# Очистите Redis
heroku redis:cli
> FLUSHALL
> exit
```

## CI/CD с GitHub (опционально)

Настройте автоматический деплой при пуше в GitHub:

1. Свяжите репозиторий с Heroku:
```bash
heroku git:remote -a your-app-name
```

2. Включите автодеплой в dashboard Heroku:
   - Перейдите в Dashboard → вашу app → Deploy
   - Подключите GitHub
   - Включите "Automatic deploys"

## Полезные ссылки

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)
- [Heroku Redis](https://devcenter.heroku.com/articles/heroku-redis)
- [Prisma Deploy Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-heroku)

## Мониторинг и метрики

```bash
# Установите New Relic для мониторинга (бесплатный plan)
heroku addons:create newrelic:wayne

# Или используйте Heroku Metrics
heroku labs:enable runtime-dyno-metadata
```

---

**Готово! 🚀** Ваше приложение теперь развернуто на Heroku!

URL: `https://your-app-name.herokuapp.com`
Swagger: `https://your-app-name.herokuapp.com/api/docs`
