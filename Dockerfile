FROM node

WORKDIR /api

COPY package.json /api

RUN npm install

COPY . /api

EXPOSE 8000

CMD ["node", "server.js"]