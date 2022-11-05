#Development Stage
FROM node:16-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @angular/cli @angular-devkit/build-angular
RUN yarn install
COPY . .
#ENV NODE_OPTIONS=--openssl--legacy-provider

#Build Stage
FROM develop-stage as build-stage
RUN yarn build

#Production Stage
FROM nginx:1.23.2
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
