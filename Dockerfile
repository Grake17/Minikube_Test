FROM node:13-alpine

WORKDIR /home/test-web

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]