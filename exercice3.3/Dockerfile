FROM node

COPY package.json /app/package.json
RUN cd app && npm install
COPY . /app/
WORKDIR /app

EXPOSE 3000

CMD ["node", "bin/www"]