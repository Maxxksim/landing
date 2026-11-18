FROM node:25-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM caddy:2

COPY ./conf/caddy/Caddyfile /etc/caddy/Caddyfile

COPY --from=build /app/dist /srv