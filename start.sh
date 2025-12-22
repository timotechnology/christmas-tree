#!/bin/bash

echo ""
echo "========================================"
echo "  🎄 Christmas Tree Server"
echo "========================================"
echo ""

cd "$(dirname "$0")"

# 检查 node_modules 是否存在
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Failed to install dependencies!"
        echo "   Please make sure Node.js is installed."
        exit 1
    fi
    echo ""
fi

echo "🚀 Starting server..."
echo "   Open http://localhost:8080 in your browser"
echo ""
echo "   Press Ctrl+C to stop the server"
echo ""

npx tsx server.ts
