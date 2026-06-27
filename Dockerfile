FROM nginx:alpine

ARG VERSION=dev

COPY Portfolio.html /usr/share/nginx/html/index.html
COPY uploads/ /usr/share/nginx/html/uploads/

RUN sed -i "s/__VERSION__/v${VERSION}/g" /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
