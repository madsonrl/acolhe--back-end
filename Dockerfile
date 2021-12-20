FROM node

ENV http_proxy http://10.58.0.50:8080
ENV https_proxy http://10.58.0.50:8080

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]