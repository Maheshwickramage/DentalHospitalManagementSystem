#use an official Node.js runtime as a parent image
FROM node:20

#set the working directory in the container 
WORKDIR /usr/src/app

#copy package.json file to the working directory
COPY package*.json ./
COPY package-lock.json .

#install dependecies
RUN npm install

#copy all the files to the container
COPY . .

# Rebuild native modules
RUN npm rebuild bcrypt --build-from-source

#expose the port the app runs in
EXPOSE 3005

#command to run the application
CMD ["node", "src/server.js"]
