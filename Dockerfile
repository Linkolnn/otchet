FROM node:20.9.0-alpine

WORKDIR /nuxt
ENV NODE_ENV production

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY .output ./.output

EXPOSE 3000

