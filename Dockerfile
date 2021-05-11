FROM node:15.11.0-alpine3.10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

RUN npm run build

FROM nginx:stable-alpine

COPY /usr/src/app/build /usr/share/nginx/html