#!/bin/bash

# Ensure strict error handling
set -euo pipefail

# Source .env file if it exists
[ -f .env ] && source .env

# Check if required environment variables are set
[ -z "$NEXT_PUBLIC_API_KEY" ] && echo "Error: NEXT_PUBLIC_API_KEY is not set" && exit 1
[ -z "$DATABASE_URL" ] && echo "Error: DATABASE_URL is not set" && exit 1
[ -z "$PORT" ] && echo "Error: PORT is not set" && exit 1

# Define project root directory
PROJECT_DIR=$(cd "$(dirname "$0")"; pwd)

# Start the Next.js application
npm run start