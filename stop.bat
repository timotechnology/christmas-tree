@echo off
chcp 65001 >nul
echo.
echo 🛑 Stopping Christmas Tree Server...
echo.

:: 查找并终止占用 8080 端口的进程
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8080" ^| findstr "LISTENING"') do (
    echo    Stopping process %%a on port 8080...
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo ✅ Server stopped.
echo.
pause
