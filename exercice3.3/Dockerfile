FROM node

COPY package.json /app/package.json
RUN cd app && npm install
COPY . /app/
WORKDIR /app

EXPOSE 8080

CMD ["npm", "start"]