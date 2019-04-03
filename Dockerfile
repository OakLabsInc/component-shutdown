FROM node:10.15.3-alpine 

WORKDIR /app
COPY . /app


RUN npm i --progress=false --loglevel="error" \
    && npm cache clean --force

CMD ["/app/src/server.js"]