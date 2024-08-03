FROM node:16.17.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js