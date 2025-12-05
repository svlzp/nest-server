# Multi-stage build для оптимизации размера образа

# Стадия 1: Сборка приложения
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package files
COPY package*.json ./
COPY prisma ./prisma/

# Устанавливаем зависимости
RUN npm ci

# Копируем исходники
COPY . .

# Генерируем Prisma Client
RUN npx prisma generate

# Генерируем React Email шаблоны
RUN npm run email:build || echo "Email templates build skipped"

# Собираем приложение
RUN npm run build

# Production image
FROM node:20-alpine

WORKDIR /app

# Копируем node_modules и сборку из builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./

# Копируем сгенерированные email шаблоны
COPY --from=builder /app/.react-email ./.react-email

# Создаем директории для uploads и logs
RUN mkdir -p uploads logs

# Устанавливаем права
RUN chown -R node:node /app

USER node

EXPOSE 3000

# Команда запуска
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
