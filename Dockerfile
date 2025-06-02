# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir archivos estáticos con Nginx
FROM nginx:alpine

# Copia el build al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Opcional: Copia tu propia configuración de Nginx si la tienes
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]