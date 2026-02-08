# Build stage
FROM node:18-alpine as build-stage
WORKDIR /app

# Declarar el argumento para la URL de la API
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL=$VUE_APP_API_URL

COPY package.json package-lock.json ./
RUN npm install
COPY . .

# El build ahora verá la variable VUE_APP_API_URL
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
