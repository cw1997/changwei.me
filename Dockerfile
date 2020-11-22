#MAINTAINER cw1997 homepage <867597730@qq.com>
#LABEL maintainer="cw1997<867597730@qq.com>"

FROM node:14.13.0-alpine AS app-base
WORKDIR /changwei.me-home
COPY dist ./dist/
# RUN npm install --registry=https://registry.npm.taobao.org
#RUN npm install
# VOLUME
EXPOSE 30001
CMD node ./dist/server-index.js
