#!/bin/bash

# Скрипт для установки переменных окружения в Heroku
# Использование: ./set-heroku-env.sh your-app-name

APP_NAME=$1

if [ -z "$APP_NAME" ]; then
    echo "❌ Ошибка: Укажите имя приложения Heroku"
    echo "Использование: ./set-heroku-env.sh your-app-name"
    exit 1
fi

echo "🚀 Настройка переменных окружения для приложения: $APP_NAME"
echo ""

# Проверка, что пользователь залогинен в Heroku
if ! heroku auth:whoami &> /dev/null; then
    echo "❌ Вы не залогинены в Heroku. Выполните: heroku login"
    exit 1
fi

# Основные переменные
echo "📝 Устанавливаем основные переменные..."
heroku config:set NODE_ENV=production -a $APP_NAME
heroku config:set APPLICATION_PORT=\$PORT -a $APP_NAME

# Database & Redis
echo "🗄️ Настраиваем базу данных и Redis..."
heroku config:set POSTGRES_URI=$(heroku config:get DATABASE_URL -a $APP_NAME) -a $APP_NAME
heroku config:set REDIS_URI=$(heroku config:get REDIS_URL -a $APP_NAME) -a $APP_NAME

# Cookie & Session (ВАЖНО: Замените на свои значения!)
echo "🍪 Настраиваем cookies и сессии..."
read -p "Введите COOKIE_SECRET (или Enter для генерации): " COOKIE_SECRET
if [ -z "$COOKIE_SECRET" ]; then
    COOKIE_SECRET=$(openssl rand -base64 32)
fi

read -p "Введите SESSION_SECRET (или Enter для генерации): " SESSION_SECRET
if [ -z "$SESSION_SECRET" ]; then
    SESSION_SECRET=$(openssl rand -base64 32)
fi

heroku config:set COOKIE_SECRET="$COOKIE_SECRET" -a $APP_NAME
heroku config:set SESSION_SECRET="$SESSION_SECRET" -a $APP_NAME
heroku config:set SESSION_NAME=session_id -a $APP_NAME
heroku config:set SESSION_DOMAIN=.herokuapp.com -a $APP_NAME
heroku config:set SESSION_MAX_AGE=7d -a $APP_NAME
heroku config:set SESSION_HTTP_ONLY=true -a $APP_NAME
heroku config:set SESSION_SECURE=true -a $APP_NAME
heroku config:set SESSION_FOLDER=sessions: -a $APP_NAME

# CORS
echo "🌐 Настраиваем CORS..."
read -p "Введите ALLOWED_ORIGINS (через запятую): " ALLOWED_ORIGINS
if [ -z "$ALLOWED_ORIGINS" ]; then
    ALLOWED_ORIGINS="https://$APP_NAME.herokuapp.com"
fi
heroku config:set ALLOWED_ORIGINS="$ALLOWED_ORIGINS" -a $APP_NAME

# OAuth Google
echo "🔐 Настраиваем Google OAuth (Enter для пропуска)..."
read -p "Google Client ID: " GOOGLE_CLIENT_ID
read -p "Google Client Secret: " GOOGLE_CLIENT_SECRET
if [ ! -z "$GOOGLE_CLIENT_ID" ]; then
    heroku config:set GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID" -a $APP_NAME
    heroku config:set GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET" -a $APP_NAME
    heroku config:set GOOGLE_REDIRECT_URI="https://$APP_NAME.herokuapp.com/auth/oauth/callback/google" -a $APP_NAME
fi

# OAuth GitHub
echo "🔐 Настраиваем GitHub OAuth (Enter для пропуска)..."
read -p "GitHub Client ID: " GITHUB_CLIENT_ID
read -p "GitHub Client Secret: " GITHUB_CLIENT_SECRET
if [ ! -z "$GITHUB_CLIENT_ID" ]; then
    heroku config:set GITHUB_CLIENT_ID="$GITHUB_CLIENT_ID" -a $APP_NAME
    heroku config:set GITHUB_CLIENT_SECRET="$GITHUB_CLIENT_SECRET" -a $APP_NAME
    heroku config:set GITHUB_REDIRECT_URI="https://$APP_NAME.herokuapp.com/auth/oauth/callback/github" -a $APP_NAME
fi

# Email
echo "📧 Настраиваем Email (Resend)..."
read -p "Email From: " EMAIL_FROM
read -p "Resend API Key: " RESEND_API_KEY
if [ ! -z "$EMAIL_FROM" ]; then
    heroku config:set EMAIL_HOST=https://api.resend.com -a $APP_NAME
    heroku config:set EMAIL_FROM="$EMAIL_FROM" -a $APP_NAME
    heroku config:set RESEND_API_KEY="$RESEND_API_KEY" -a $APP_NAME
fi

echo ""
echo "✅ Переменные окружения успешно установлены!"
echo ""
echo "📋 Проверьте переменные:"
echo "   heroku config -a $APP_NAME"
echo ""
echo "🚀 Теперь можете деплоить приложение:"
echo "   git push heroku main"
echo "   heroku run npx prisma migrate deploy -a $APP_NAME"
