#! /bin/sh

docker exec -it chivalrous-workspace-1 npm i --legacy-peer-deps && 
docker exec -it chivalrous-vite-1 npm i --legacy-peer-deps &&
(cd ./dev/php-fpm/project/ && npm i --legacy-peer-deps) 