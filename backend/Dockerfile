# Use a smaller base image for the final build
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the files to the working directory
COPY . .

# Rebuild native modules (if necessary)
RUN npm rebuild bcrypt --build-from-source

# Use a smaller base image for the final build
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app .

# Install only production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "src/server.js"]
