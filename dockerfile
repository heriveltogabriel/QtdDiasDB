FROM node:14-alpine as build

COPY ./www /www/app
COPY startup.sh /www/app

RUN npm install -g json-server
RUN npm install -g http-server
RUN echo '{ "eventos": [{"id": 1,"titulo": "Card Exemplo", "descricao": "Apenas um exemplo", "dataInicio": "2022-09-08T00:14:30.070Z","arquivada": "false"}] }' > /www/app/db2.json

EXPOSE 8100
EXPOSE 3000

WORKDIR /www/app

CMD ["/bin/sh","startup.sh"]

