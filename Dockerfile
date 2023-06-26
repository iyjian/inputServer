FROM node:18-buster AS base

ENV TZ Asia/Shanghai

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install

COPY . .

