# Build Image
FROM node:lts as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Deployed Image
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci && npm prune --production

ENV NODE_ENV=production

COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/public ./public

EXPOSE 3000

CMD ./node_modules/.bin/remix-serve ./build
