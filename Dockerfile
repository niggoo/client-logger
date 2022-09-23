FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

COPY index.js index.js
EXPOSE 3000

CMD [ "npm", "start" ]