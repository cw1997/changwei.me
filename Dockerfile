#MAINTAINER cw1997 homepage <867597730@qq.com>
#LABEL maintainer="cw1997<867597730@qq.com>"

FROM node:16.16.0-alpine AS app-base
WORKDIR /changwei-homepage
COPY dist ./dist/
EXPOSE 30001
CMD node ./dist/server-index.js
