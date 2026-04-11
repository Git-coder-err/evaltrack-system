# Backend Dockerfile for EvalTrack System
# This creates a production-ready Node.js container

# Stage 1: Build stage
FROM node:20-alpine AS builder

# Install build dependencies for native modules (better-sqlite3)
RUN apk add --no-cache python3 make g++ gcc

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies (use npm install instead of ci for flexibility)
RUN npm install --production

# Stage 2: Production stage
FROM node:20-alpine

# Install runtime dependencies for native modules
RUN apk add --no-cache python3 make g++ gcc

WORKDIR /app

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy application code
COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership to nodejs user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose the port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start the application
CMD ["node", "index.js"]
