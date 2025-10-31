# for local testing and containerization practices ...
FROM node:20-slim AS builder
WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com

COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev=false

RUN npm install @rollup/rollup-linux-x64-gnu --save-dev --force

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
