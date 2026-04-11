# Backend Dockerfile for EvalTrack Server
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install build dependencies for better-sqlite3 (if needed)
RUN apk add --no-cache python3 make g++ sqlite sqlite-dev

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/health || exit 1

# Start the application
CMD ["node", "index.js"]
