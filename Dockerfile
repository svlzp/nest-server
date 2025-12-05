# Multi-stage build для оптимизации размера образа

# Стадия 1: Сборка приложения
FROM node:20-alpine AS builder

# Установка зависимостей для сборки
RUN apk add --no-cache openssl

WORKDIR /app

# Копирование файлов зависимостей
COPY package*.json ./
COPY prisma ./prisma/

# Установка зависимостей
RUN npm ci

# Копирование исходного кода
COPY . .

# Генерация Prisma Client и сборка приложения
RUN npx prisma generate
RUN npm run build

# Удаление dev зависимостей
RUN npm prune --production

# Стадия 2: Production образ
FROM node:20-alpine AS production

# Установка необходимых системных пакетов
RUN apk add --no-cache openssl curl

WORKDIR /app

# Копирование только необходимых файлов из builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./

# Создание пользователя без прав root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Переключение на пользователя nestjs
USER nestjs

# Открытие порта
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Запуск приложения
CMD ["node", "dist/main.js"]
