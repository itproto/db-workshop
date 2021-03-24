FROM node:alpine
WORKDIR /usr/app

# Install some depenendencies
COPY ./package.json ./

RUN npm install -g nodemon
RUN npm install  # --only=production
COPY ./ ./

# RUN npm run build 

CMD npm config set cache-min 9999999 && \ 
    npm install && \
    npm run start:dev 
