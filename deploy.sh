#!/bin/bash

# Update system packages
yum update -y

# Install Docker
yum install docker -y

# Enable and start the Docker service
systemctl enable docker.service
systemctl start docker.service

# Install Git
yum install git -y

# Clone the repository
git clone https://github.com/Kinar-Usha/FidZulu.git

# Change directory to FidZulu
cd FidZulu

# Change directory to the specific service directory (bikeService, toyService, or FoodService)
cd bikeService  # Change to the appropriate service directory

# Prompt the user for DynamoDB configuration
read -p "Enter DynamoDB Region: " DYNAMODB_REGION
read -p "Enter AWS Access Key ID: " AWS_ACCESS_KEY_ID
read -s -p "Enter AWS Secret Access Key: " AWS_SECRET_ACCESS_KEY
echo  # Print a newline after the password prompt

# Create and populate the .env file with the user-provided values
cat > .env <<EOL
DYNAMODB_REGION="$DYNAMODB_REGION"
AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID"
AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY"
EOL

# Build the Docker image for the service (use the appropriate name based on the service)
docker build -t fz-bike .

# Run the Docker container for the service, mapping the appropriate ports
docker container run -it -p 3031:3031 fz-bike
