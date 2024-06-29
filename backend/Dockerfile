#use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

#copy all the files to the container
COPY . .


#expose the port the app runs in
EXPOSE 5000

CMD ["node", "src/server.js"]
