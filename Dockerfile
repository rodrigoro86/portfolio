FROM nginx:alpine

# Copy static site files to nginx default directory
COPY . /usr/share/nginx/html

# Use Portfolio.html as default entry page
RUN cp /usr/share/nginx/html/Portfolio.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
