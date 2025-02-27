# Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

# Copy the project files
COPY . .

# Build the Next.js application
RUN yarn build

# Production Stage (Using serve)
FROM node:20-alpine AS runner
WORKDIR /app

# Install serve
RUN yarn global add serve

# Copy built files from the builder stage
COPY --from=builder /app/.next ./ .next
COPY --from=builder /app/public ./public

# Expose port 3000 (serve default)
EXPOSE 3000

# Start the server
CMD ["serve", "-s", ".next", "-l", "3000"]