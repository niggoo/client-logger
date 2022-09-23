FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./
# RUN npm install
COPY index.js index.js
EXPOSE 3000

CMD [ "npm", "start" ]