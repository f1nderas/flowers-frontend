# FROM node:18-alpine
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .

# ENV APP_ENV=development
# ENV APP_URL=http://localhost:3000
# ENV APP_DOMAIN=localhost
# ENV SERVER_URL=http://localhost:5050
# ENV IS_DOCKER_BUILD=true

# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "run", "start"]


FROM node:alpine as build

COPY package.json package.json
RUN npm install
COPY . .
ENV IS_DOCKER_BUILD=true
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]