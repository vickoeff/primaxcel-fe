FROM nginx:stable-alpine

EXPOSE 3000

COPY ./server/default.conf /etc/nginx/conf.d/
COPY ./build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
