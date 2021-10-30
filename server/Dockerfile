FROM node:16.10

WORKDIR /app
COPY . .

RUN yarn global add @nestjs/cli
RUN yarn install
COPY . .

CMD yarn start
