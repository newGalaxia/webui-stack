FROM node:12

RUN npm install -g nodemon

# Create app directory
WORKDIR /var/www/socket-server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./socket-server/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "nodemon", "app.js" ]