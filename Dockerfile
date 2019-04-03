FROM node:10.15.3-alpine 

WORKDIR /app
COPY . /app


RUN npm i --progress=false --loglevel="error" \
    && npm cache clean --force

CMD ["/app/src/server.js"]

ENV NODE_ENV=production \
    PLATFORM_HOST=localhost:443 \
    SHUTDOWN_TIME="0 0 18 * * *" \
    TZ=America/Los_Angeles