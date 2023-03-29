FROM node:18.11.0-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 3001

CMD [ "node", "events.js" ]