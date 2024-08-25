#!/usr/bin/env bash
FROM node
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
EXPOSE 3000
RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]
CMD [ "node", "src/index.js" ]
