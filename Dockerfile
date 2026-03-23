# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

# Expose your chosen port
EXPOSE 4000

# Force Vite preview to bind to 0.0.0.0:8088 so it's accessible outside container
ENV PORT=4000
ENV HOST=0.0.0.0

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4000"]
