# 🚀 Деплой NestJS API на Heroku

Полное руководство по развертыванию NestJS приложения с PostgreSQL, Redis, Prisma и загрузкой файлов на Heroku.

## 📋 Содержание

- [Быстрый старт](#быстрый-старт)
- [Подробная инструкция](#подробная-инструкция)
- [Файлы проекта](#файлы-проекта)
- [Переменные окружения](#переменные-окружения)
- [Отладка](#отладка)

---

## 🎯 Быстрый старт

### 1. Установите необходимое ПО

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [Git](https://git-scm.com/)

### 2. Подготовьте проект

```bash
cd d:\nest_server\server_nestjs

# Инициализируйте Git (если еще не сделано)
git init
git add .
git commit -m "Prepare for Heroku deployment"

# Войдите в Heroku
heroku login
```

### 3. Создайте приложение

```bash
# Создайте приложение (замените your-app-name)
heroku create your-app-name

# Добавьте базу данных и Redis
heroku addons:create heroku-postgresql:essential-0
heroku addons:create heroku-redis:mini
```

### 4. Настройте переменные окружения

**Автоматически (PowerShell):**
```powershell
.\set-heroku-env.ps1 your-app-name
```

**Автоматически (Bash):**
```bash
./set-heroku-env.sh your-app-name
```

**Вручную:**
См. раздел [Переменные окружения](#переменные-окружения)

### 5. Деплой

```bash
# Отправьте код на Heroku
git push heroku main

# Примените миграции базы данных
heroku run npx prisma migrate deploy

# Откройте приложение
heroku open
```

### 6. Проверка

- **API:** `https://your-app-name.herokuapp.com`
- **Swagger:** `https://your-app-name.herokuapp.com/api/docs`
- **Логи:** `heroku logs --tail`

---

## 📚 Подробная инструкция

См. файл [HEROKU_DEPLOY.md](./HEROKU_DEPLOY.md) для детальных инструкций.

---

## 📁 Файлы проекта

### Созданные файлы для Heroku:

| Файл | Описание |
|------|----------|
| `Procfile` | Указывает Heroku, как запускать приложение |
| `package.json` | Обновлен с необходимыми скриптами |
| `.gitignore` | Исключает ненужные файлы из Git |
| `HEROKU_DEPLOY.md` | Подробная инструкция по деплою |
| `QUICK_START.md` | Быстрый старт (5 минут) |
| `DEPLOYMENT_CHECKLIST.md` | Чек-лист для проверки |
| `.env.heroku.example` | Пример переменных окружения |
| `set-heroku-env.sh` | Скрипт настройки (Bash) |
| `set-heroku-env.ps1` | Скрипт настройки (PowerShell) |

### Procfile

```
web: npm run start:prod
```

### Добавленные скрипты в package.json

```json
"postinstall": "prisma generate",
"heroku-postbuild": "npm run build"
```

---

## 🔐 Переменные окружения

### Обязательные переменные:

```bash
# Application
NODE_ENV=production
APPLICATION_PORT=$PORT  # Heroku установит автоматически

# Database (Heroku создаст автоматически)
POSTGRES_URI=$(heroku config:get DATABASE_URL)

# Redis (Heroku создаст автоматически)
REDIS_URI=$(heroku config:get REDIS_URL)

# Cookie & Session (ВАЖНО: Используйте сильные секреты!)
COOKIE_SECRET="your-strong-secret-min-32-chars"
SESSION_SECRET="your-strong-secret-min-32-chars"
SESSION_NAME="session_id"
SESSION_DOMAIN=".herokuapp.com"
SESSION_MAX_AGE="7d"
SESSION_HTTP_ONLY="true"
SESSION_SECURE="true"
SESSION_FOLDER="sessions:"

# CORS
ALLOWED_ORIGINS="https://your-frontend.com"
```

### Опциональные переменные (OAuth):

```bash
# Google OAuth
GOOGLE_CLIENT_ID="your-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-secret"
GOOGLE_REDIRECT_URI="https://your-app.herokuapp.com/auth/oauth/callback/google"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-secret"
GITHUB_REDIRECT_URI="https://your-app.herokuapp.com/auth/oauth/callback/github"
```

### Опциональные переменные (Email):

```bash
EMAIL_HOST="https://api.resend.com"
EMAIL_FROM="noreply@yourdomain.com"
RESEND_API_KEY="re_your_api_key"
```

### Установка переменных:

```bash
heroku config:set VARIABLE_NAME="value" -a your-app-name
```

---

## 🐛 Отладка

### Просмотр логов

```bash
heroku logs --tail
```

### Проверка статуса

```bash
heroku ps
heroku config
heroku addons
```

### Перезапуск приложения

```bash
heroku restart
```

### Запуск команд в Heroku

```bash
heroku run bash
heroku run npx prisma migrate deploy
heroku run npx prisma studio
```

### Проверка базы данных

```bash
heroku pg:info
heroku pg:psql  # Подключение к PostgreSQL
```

### Проверка Redis

```bash
heroku redis:info
heroku redis:cli  # Подключение к Redis
```

### Типичные проблемы:

**1. Приложение не запускается**
```bash
heroku logs --tail
heroku restart
```

**2. Ошибки базы данных**
```bash
heroku run npx prisma migrate deploy
heroku run npx prisma db push
```

**3. Порт занят / EADDRINUSE**
- Убедитесь, что используется `process.env.PORT`
- Проверьте, что `APPLICATION_PORT=$PORT` установлена

**4. Prisma ошибки**
```bash
heroku run npx prisma generate
heroku run npx prisma migrate deploy
```

---

## 🔄 Обновление приложения

```bash
# Внесите изменения в код
git add .
git commit -m "Your update message"

# Деплой
git push heroku main

# Если изменилась схема БД
heroku run npx prisma migrate deploy
```

---

## 📊 Мониторинг

### Установка New Relic (опционально)

```bash
heroku addons:create newrelic:wayne
```

### Настройка алертов

```bash
heroku addons:create papertrail
```

---

## 🔒 Безопасность

### Рекомендации:

1. **Используйте сильные секреты** (минимум 32 символа)
2. **Включите HTTPS** (автоматически на Heroku)
3. **Настройте CORS** только для доверенных доменов
4. **Включите rate limiting** в приложении
5. **Регулярно обновляйте зависимости**

```bash
npm audit
npm audit fix
```

---

## 📦 Файловое хранилище

⚠️ **Важно:** Heroku использует эфемерную файловую систему. Файлы будут удаляться при каждом рестарте.

### Решения для постоянного хранения:

**1. AWS S3 (рекомендуется)**
```bash
npm install @aws-sdk/client-s3 multer-s3
```

**2. Cloudinary**
```bash
npm install cloudinary multer-storage-cloudinary
```

См. документацию Heroku для настройки.

---

## 🚀 CI/CD с GitHub

### Автоматический деплой:

1. Перейдите в Heroku Dashboard → ваше приложение → Deploy
2. Подключите GitHub репозиторий
3. Включите "Automatic deploys" для нужной ветки
4. (Опционально) Включите "Wait for CI to pass"

---

## 📖 Полезные ссылки

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)
- [Heroku Redis](https://devcenter.heroku.com/articles/heroku-redis)
- [Prisma Deploy Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-heroku)
- [NestJS Documentation](https://docs.nestjs.com/)

---

## 🎉 Готово!

После успешного деплоя ваше приложение доступно по адресу:
- **API:** `https://your-app-name.herokuapp.com`
- **Swagger:** `https://your-app-name.herokuapp.com/api/docs`

**Endpoints:**
- `POST /auth/register` - Регистрация
- `POST /auth/login` - Вход
- `GET /user/profile` - Профиль пользователя
- `GET /tools` - Список инструментов
- `GET /machine-cnc` - Список станков
- `GET /work-overnight` - Список работ
- `POST /files/upload` - Загрузка файлов

---

**Вопросы?** Проверьте [HEROKU_DEPLOY.md](./HEROKU_DEPLOY.md) или [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
