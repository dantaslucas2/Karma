FROM node:latest
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY . /var/back
WORKDIR /var/back
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
ENTRYPOINT [ "npm", "start" ]
