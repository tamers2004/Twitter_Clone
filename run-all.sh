#!/usr/bin/env bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🚀 Starting dev environment..."

# Start database
echo "🐳 Starting database..."
cd "$ROOT_DIR/database"
docker compose up -d

# Start server
echo "🧠 Starting server..."
cd "$ROOT_DIR/server"
npm run dev &
SERVER_PID=$!

# Start client
echo "🎨 Starting client..."
cd "$ROOT_DIR/client"
npm run dev &
CLIENT_PID=$!

# Handle Ctrl+C
cleanup() {
  echo ""
  echo "🛑 Shutting down..."
  kill $SERVER_PID $CLIENT_PID 2>/dev/null || true
  cd "$ROOT_DIR/database"
  docker compose down
  exit 0
}

trap cleanup SIGINT SIGTERM

# Wait for background processes
wait

