# base image
FROM node:lts-alpine3.9
# Create app directory"

WORKDIR /var/www/webui-vuejs

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "run", "serve"]
