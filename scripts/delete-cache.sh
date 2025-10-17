#! /bin/sh
set -e

CONTAINER=${1:-}

if [ -z "$CONTAINER" ]; then
    echo "Usage: $0 <container-name-or-id>"
    exit 1
fi

docker exec "$CONTAINER" php artisan cache:clear
docker exec "$CONTAINER" php artisan config:clear
docker exec "$CONTAINER" php artisan route:clear
docker exec "$CONTAINER" php artisan view:clear
docker exec "$CONTAINER" php artisan optimize:clear