#!/bin/bash

echo ""
echo "🛑 Stopping Christmas Tree Server..."
echo ""

# 查找并终止占用 8080 端口的进程
PID=$(lsof -ti:8080 2>/dev/null)

if [ -n "$PID" ]; then
    echo "   Stopping process $PID on port 8080..."
    kill -9 $PID
    echo ""
    echo "✅ Server stopped."
else
    echo "   No server running on port 8080."
fi

echo ""
