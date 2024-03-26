FROM node:alpine
WORKDIR /usr/app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
USER node
CMD [ "npm", "--", "start" ]