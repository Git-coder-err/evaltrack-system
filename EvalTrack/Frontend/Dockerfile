# Frontend Dockerfile for EvalTrack
# This uses Nginx to serve static HTML/CSS/JS files

# Stage 1: Build stage (optional - for future builds)
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY . .
# RUN npm install && npm run build

# Stage 2: Production stage with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend files to nginx html directory
COPY . /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
