FROM node:14

RUN mkdir /app

WORKDIR /app

COPY package*.json Backend /app/

RUN npm install

EXPOSE 4500

CMD [ "node", "Server.js" ]