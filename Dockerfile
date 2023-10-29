FROM node:16-alpine3.18
WORKDIR /app/

COPY tsconfig.json /app/
COPY package.json /app/
COPY public /app/public
COPY src /app/

RUN yarn install

CMD ["yarn", "start"]