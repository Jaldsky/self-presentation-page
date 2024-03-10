FROM nginx:1.21.3

COPY ./page /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./ryzhenkov_ssl.crt /etc/ssl/ryzhenkov_ssl.crt
COPY ./ryzhenkov_ssl.key /etc/ssl/ryzhenkov_ssl.key
COPY ./ryzhenkov_ssl_ca.crt /etc/ssl/ryzhenkov_ssl_ca.crt


EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
