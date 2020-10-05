# base image
FROM node:lts-alpine3.9
# Create app directory"

WORKDIR /var/www/webui-vuejs

# Install app dependencies
COPY ./webui-vuejs/package*.json ./

RUN npm install

RUN npm install -g @vue/cli

# Bundle app source
COPY ./webui-vuejs .

EXPOSE 8080

CMD [ "npm", "run", "serve"]