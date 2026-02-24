#!/bin/bash

# Frontend Deployment Script - Nomad
# This script deploys the frontend with correct backend URL configuration

echo "🚀 Starting frontend deployment..."

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Pull latest code
echo -e "\n${YELLOW}📥 Pulling latest code...${NC}"
git pull origin main
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to pull code${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Code updated${NC}"

# Step 2: Check .env.production exists
echo -e "\n${YELLOW}🔍 Checking .env.production...${NC}"
if [ ! -f ".env.production" ]; then
    echo -e "${YELLOW}⚠️  .env.production not found, creating...${NC}"
    cat > .env.production << 'EOF'
VITE_API_URL=https://your-nomad-api-url.com/api/v1
VITE_BACKEND_URL=https://your-nomad-backend-url.com/
VITE_APP_NAME=Nomad
VITE_APP_URL=https://your-nomad-frontend-url.com/
EOF
    echo -e "${GREEN}✅ .env.production created${NC}"
else
    echo -e "${GREEN}✅ .env.production exists${NC}"
fi

echo -e "\n${YELLOW}📋 Environment variables:${NC}"
cat .env.production

# Step 3: Install dependencies
echo -e "\n${YELLOW}📦 Installing dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dependencies installed${NC}"

# Step 4: Build for production
echo -e "\n${YELLOW}🏗️  Building for production...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build complete${NC}"

# Step 5: (Optional) Restart server/service here
# e.g., pm2 restart nomad-frontend or systemctl restart nginx

echo -e "\n${GREEN}🚀 Deployment finished!${NC}"
