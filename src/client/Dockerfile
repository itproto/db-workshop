# FROM node:alpine AS builder
# WORKDIR /app

# ARG CI
# ARG NPM_TOKEN
# ENV CI=$CI
# ENV NPM_TOKEN=$NPM_TOKEN

# COPY ./package*.json ./
# COPY . .
# # npm ci --no-optional && \
# # npm run test -- --coverage && \
# RUN npm install && npm run build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY  ./packages/blotter/dist blotter
COPY  ./packages/shell/dist shell
#COPY --from=builder /app/packages/blotter/dist ./blotter
#COPY --from=builder /app/packages/shell/dist ./shell
#COPY --from=builder /app/packages/blotter/dist ./foo
# Containers run nginx with global directives and daemon off

# Copy nginx config
COPY ./nginx/multi-serv.conf /etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]