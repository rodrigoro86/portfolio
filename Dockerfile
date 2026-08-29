FROM node:20-alpine AS build

ARG VERSION=dev
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV VITE_VERSION=$VERSION
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
