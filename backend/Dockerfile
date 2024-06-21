#use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder

#set the working directory in the container 
WORKDIR /usr/src/app

#copy package.json file to the working directory
COPY package*.json ./

#install dependecies
RUN npm install

#copy all the files to the container
COPY . .



#expose the port the app runs in
EXPOSE 8080

#command to run the application
CMD ["node", "src/server.js"]
