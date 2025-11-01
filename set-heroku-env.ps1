# Скрипт для установки переменных окружения в Heroku (PowerShell)
# Использование: .\set-heroku-env.ps1 your-app-name

param(
    [Parameter(Mandatory=$true)]
    [string]$AppName
)

Write-Host "🚀 Настройка переменных окружения для приложения: $AppName" -ForegroundColor Green
Write-Host ""

# Проверка, что пользователь залогинен в Heroku
try {
    $null = heroku auth:whoami 2>&1
} catch {
    Write-Host "❌ Вы не залогинены в Heroku. Выполните: heroku login" -ForegroundColor Red
    exit 1
}

# Основные переменные
Write-Host "📝 Устанавливаем основные переменные..." -ForegroundColor Yellow
heroku config:set NODE_ENV=production -a $AppName
heroku config:set "APPLICATION_PORT=`$PORT" -a $AppName

# Database & Redis
Write-Host "🗄️ Настраиваем базу данных и Redis..." -ForegroundColor Yellow
$DATABASE_URL = heroku config:get DATABASE_URL -a $AppName
$REDIS_URL = heroku config:get REDIS_URL -a $AppName
heroku config:set POSTGRES_URI=$DATABASE_URL -a $AppName
heroku config:set REDIS_URI=$REDIS_URL -a $AppName

# Cookie & Session
Write-Host "🍪 Настраиваем cookies и сессии..." -ForegroundColor Yellow
$COOKIE_SECRET = Read-Host "Введите COOKIE_SECRET (или Enter для генерации)"
if ([string]::IsNullOrEmpty($COOKIE_SECRET)) {
    $COOKIE_SECRET = [Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
    Write-Host "Сгенерирован COOKIE_SECRET: $COOKIE_SECRET" -ForegroundColor Cyan
}

$SESSION_SECRET = Read-Host "Введите SESSION_SECRET (или Enter для генерации)"
if ([string]::IsNullOrEmpty($SESSION_SECRET)) {
    $SESSION_SECRET = [Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
    Write-Host "Сгенерирован SESSION_SECRET: $SESSION_SECRET" -ForegroundColor Cyan
}

heroku config:set COOKIE_SECRET="$COOKIE_SECRET" -a $AppName
heroku config:set SESSION_SECRET="$SESSION_SECRET" -a $AppName
heroku config:set SESSION_NAME=session_id -a $AppName
heroku config:set SESSION_DOMAIN=.herokuapp.com -a $AppName
heroku config:set SESSION_MAX_AGE=7d -a $AppName
heroku config:set SESSION_HTTP_ONLY=true -a $AppName
heroku config:set SESSION_SECURE=true -a $AppName
heroku config:set SESSION_FOLDER=sessions: -a $AppName

# CORS
Write-Host "🌐 Настраиваем CORS..." -ForegroundColor Yellow
$ALLOWED_ORIGINS = Read-Host "Введите ALLOWED_ORIGINS (через запятую, Enter для значения по умолчанию)"
if ([string]::IsNullOrEmpty($ALLOWED_ORIGINS)) {
    $ALLOWED_ORIGINS = "https://$AppName.herokuapp.com"
}
heroku config:set ALLOWED_ORIGINS="$ALLOWED_ORIGINS" -a $AppName

# OAuth Google
Write-Host "🔐 Настраиваем Google OAuth (Enter для пропуска)..." -ForegroundColor Yellow
$GOOGLE_CLIENT_ID = Read-Host "Google Client ID"
if (-not [string]::IsNullOrEmpty($GOOGLE_CLIENT_ID)) {
    $GOOGLE_CLIENT_SECRET = Read-Host "Google Client Secret"
    heroku config:set GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID" -a $AppName
    heroku config:set GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET" -a $AppName
    heroku config:set GOOGLE_REDIRECT_URI="https://$AppName.herokuapp.com/auth/oauth/callback/google" -a $AppName
}

# OAuth GitHub
Write-Host "🔐 Настраиваем GitHub OAuth (Enter для пропуска)..." -ForegroundColor Yellow
$GITHUB_CLIENT_ID = Read-Host "GitHub Client ID"
if (-not [string]::IsNullOrEmpty($GITHUB_CLIENT_ID)) {
    $GITHUB_CLIENT_SECRET = Read-Host "GitHub Client Secret"
    heroku config:set GITHUB_CLIENT_ID="$GITHUB_CLIENT_ID" -a $AppName
    heroku config:set GITHUB_CLIENT_SECRET="$GITHUB_CLIENT_SECRET" -a $AppName
    heroku config:set GITHUB_REDIRECT_URI="https://$AppName.herokuapp.com/auth/oauth/callback/github" -a $AppName
}

# Email
Write-Host "📧 Настраиваем Email (Resend)..." -ForegroundColor Yellow
$EMAIL_FROM = Read-Host "Email From (например: noreply@yourdomain.com)"
if (-not [string]::IsNullOrEmpty($EMAIL_FROM)) {
    $RESEND_API_KEY = Read-Host "Resend API Key"
    heroku config:set EMAIL_HOST=https://api.resend.com -a $AppName
    heroku config:set EMAIL_FROM="$EMAIL_FROM" -a $AppName
    heroku config:set RESEND_API_KEY="$RESEND_API_KEY" -a $AppName
}

Write-Host ""
Write-Host "✅ Переменные окружения успешно установлены!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Проверьте переменные:" -ForegroundColor Cyan
Write-Host "   heroku config -a $AppName"
Write-Host ""
Write-Host "🚀 Теперь можете деплоить приложение:" -ForegroundColor Cyan
Write-Host "   git push heroku main"
Write-Host "   heroku run npx prisma migrate deploy -a $AppName"
Write-Host ""
Write-Host "📖 Откройте Swagger документацию после деплоя:" -ForegroundColor Cyan
Write-Host "   https://$AppName.herokuapp.com/api/docs"
