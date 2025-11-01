# 🚀 Быстрый старт: Деплой на Heroku

## Краткая инструкция (5 минут)

### 1. Установите Heroku CLI

Скачайте с: https://devcenter.heroku.com/articles/heroku-cli

### 2. Войдите в Heroku

```bash
heroku login
```

### 3. Создайте приложение

```bash
cd d:\nest_server\server_nestjs
git init
git add .
git commit -m "Initial commit"

heroku create your-app-name
```

### 4. Добавьте базу данных и Redis

```bash
heroku addons:create heroku-postgresql:essential-0
heroku addons:create heroku-redis:mini
```

### 5. Настройте переменные окружения

**Автоматически (рекомендуется):**
```powershell
.\set-heroku-env.ps1 your-app-name
```

**Или вручную:**
```bash
heroku config:set NODE_ENV=production
heroku config:set APPLICATION_PORT=$PORT
heroku config:set POSTGRES_URI=$(heroku config:get DATABASE_URL)
heroku config:set REDIS_URI=$(heroku config:get REDIS_URL)
heroku config:set COOKIE_SECRET="your-secret-min-32-chars"
heroku config:set SESSION_SECRET="your-secret-min-32-chars"
# ... остальные переменные (см. .env.heroku.example)
```

### 6. Деплой!

```bash
git push heroku main
heroku run npx prisma migrate deploy
heroku open
```

## ✅ Проверка

После деплоя откройте:
- **API:** https://your-app-name.herokuapp.com
- **Swagger:** https://your-app-name.herokuapp.com/api/docs

## 📝 Логи

```bash
heroku logs --tail
```

## 🔄 Обновления

```bash
git add .
git commit -m "Update"
git push heroku main
```

---

**Подробная инструкция:** [HEROKU_DEPLOY.md](./HEROKU_DEPLOY.md)
