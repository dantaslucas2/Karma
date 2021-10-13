FROM node:latest
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY . /var/front
WORKDIR /var/front
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
ENTRYPOINT [ "yarn", "start" ]
