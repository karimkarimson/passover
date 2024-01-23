# Abschlussprojekt AWS 23-02
# Erstellung des Container-Images für das Frontend
# © 2024 Markus Rennings

FROM node:alpine as build

RUN mkdir ./Frontend
COPY . ./Frontend
RUN <<EOF
cd  Frontend
npm ci
npm run build
EOF


FROM nginx:alpine
# per default läuft nginx rootless
# / # ps axu
# PID   USER     TIME  COMMAND
#   1   root     0:00  nginx: master process nginx -g daemon off;
#  30   nginx    0:00  nginx: worker process


COPY --from=build /Frontend/dist /usr/share/nginx/html

EXPOSE 80
