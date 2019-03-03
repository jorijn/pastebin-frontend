FROM node:8

WORKDIR /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
