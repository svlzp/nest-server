# Multi-stage build для оптимизации размера образа

# Стадия 1: Сборка приложения
FROM node:20-alpine

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

# Генерируем React Email шаблоны (игнорируем ошибку если нет)
RUN npm run email:build || true

# Собираем приложение
RUN npm run build

# Создаем директории
RUN mkdir -p uploads logs && \
    chown -R node:node /app

USER node

EXPOSE 3000

# Команда запуска
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
