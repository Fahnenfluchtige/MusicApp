FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY src/ ./src/

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev", "--host", "0.0.0.0"]
