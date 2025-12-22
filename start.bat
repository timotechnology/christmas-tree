@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   🎄 Christmas Tree Server
echo ========================================
echo.

cd /d "%~dp0"

:: 检查 node_modules 是否存在
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ❌ Failed to install dependencies!
        echo    Please make sure Node.js is installed.
        pause
        exit /b 1
    )
    echo.
)

echo 🚀 Starting server...
echo    Open http://localhost:8080 in your browser
echo.
echo    Press Ctrl+C to stop the server
echo.

npx tsx server.ts
