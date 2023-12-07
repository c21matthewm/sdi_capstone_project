# sdi_capstone_project

```
docker run --rm --name workshop-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

docker exec -it <PSQL-Container-ID> bash

psql -U postgres

CREATE database satellite_status;

\c satellite_status
```
