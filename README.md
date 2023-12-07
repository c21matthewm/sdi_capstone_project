# sdi_capstone_project
======================================================================
PROJECT TITLE:

OVERVIEW:
======================================================================
TABLE OF CONTENTS:

- Description
- Installation
- Under the Hood
- Developer Notes
- Usage
- Trouble Shooting
- Future Implementation
======================================================================
DESCRIPTION:

======================================================================
INSTALLATION:

1) npm install in all folders
2) open docker desktop
3) docker pull postgres:latest
```
docker run --rm --name workshop-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

docker exec -it <PSQL-Container-ID> bash

psql -U postgres

CREATE database satellite_status;

\c satellite_status
```
