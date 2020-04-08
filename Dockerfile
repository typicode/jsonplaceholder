FROM node:alpine

EXPOSE 3000
WORKDIR /usr/local/gitlab-ci-demo
COPY package.json package-lock.json index.js data.json Procfile seed.js ./
COPY src/ src/
RUN npm install --production

ENTRYPOINT ["npm", "start"]