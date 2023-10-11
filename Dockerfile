# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./


# Copy the child service directories into the container
COPY bikeService/ ./bikeService
COPY foodService/ ./foodService
COPY toyService/ ./toyService

# Install project dependencies

RUN npm run clnI

# Expose the ports that the child services will be listening on
EXPOSE 3031
EXPOSE 3032
EXPOSE 3033

# Command to start all three services concurrently
CMD ["npm", "start"]
