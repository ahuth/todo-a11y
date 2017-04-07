FROM docker.repo.mvn.link/base-node:latest
COPY . /home/node/current
USER root
RUN chown -R node. /home/node/current
RUN apt-get update && apt-get install net-tools
USER node
WORKDIR /home/node/current
RUN yarn install
CMD yarn start
