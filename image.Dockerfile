FROM nginx:latest

COPY ./page /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]