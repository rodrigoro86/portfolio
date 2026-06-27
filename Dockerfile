FROM nginx:alpine

COPY Portfolio.html /usr/share/nginx/html/index.html
COPY uploads/ /usr/share/nginx/html/uploads/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
