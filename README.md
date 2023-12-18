# PROJECT: **SPACE BRIDGE**

Space Bridge is an app that addresses the current lack of centralized information about the status of a satellite, offering a user-friendly platform for users to retrieve and update satellite status in real-time. It allows both users and admin to contribute and access aggregated reports, ensuring an efficient and comprehensive view of all satellites in their AOR.
---

### FUNCTIONALITY 
---

#### User Stories:
  - Create an account
  - Log into an existing account
  - See a complete list of all existing satellites
  - Add and remove satellites to a personalized dashboard
  - Submit a report about a satellite's status
  - See total number of reports per satellite
  - View all reports for a satellite
  - View a specific satellite report
  - View details about a specific satellite
  - Line chart displays the data trend of number of reports for a satellite submitted over twelve months
  - Bar graph displays ratio of different satellite interference reasons for each satellite 
  - Map displays a user location marker for each report
  - Selecting a marker will display a popup for a link to the report
  - Submitted a new report automatically populates a new marker

#### Admin Stories:
  - USER abilities extends to ADMIN accounts
  - Add a new satellite to the database 
  - Remove a satellite
  - Manage satellites in a constellation (personal dashboard)
  - Change the status of a satellite
  - Archive reports

### INSTALLATION:
---

1) **Install Support (first time use)**
  *In Frontend:*
    ```
    npm install
    npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom chart.js firebase
    npm install @mui/x-charts
    ```
  *In Backend:*
  ```
    npm install
    npm install nodemon
  ```
2) **Configure Docker Support (first time use)**
  - Open Docker Desktop
  - From the terminal, cd into backend
  - Download latest postgres image
    ```
    docker pull postgres:latest
    ```
  - Spin up Docker Container (first time use)
    ```
    docker run --rm --name workshop-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
    ```
  - Connect Backend to Docker Container
    ```
    docker exec -it <PSQL-Container-ID> bash
    ```

3) **Link Backend Server to Database (first time use)**
    -- Start a new terminal, cd into backend
    ```
    psql -U postgres
    ```
  - Create the Database
    ```
    CREATE database satellite_status;
    ```
  - Connect to the Database
    ```
    \c satellite_status
    ```

4) **Note: If Docker is ever closed due to application restart or PC restart, spin up the container from the image again**
  ```
  docker run --rm --name workshop-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
  ```

5) **Seed the Database with initial data (every time full stack goes live)**
  ```
  npx knex migrate:rollback
  npx knex migrate:latest
  npx knex seed:run
  ```

6) **Launch full stack application**
  - Launch Backend Server
    -- In new terminal, *cd backend*
    ```
    npm start
  - Launch Frontend Client
    -- In new terminal, *cd frontend*
    ```
    npm start
    ```


    // ADMIN ACCOUNTS
    INSIGHT:
      user: admin@gmail.com
      password: password
    OUTSTAR:
      user: user@gmail.com
      password: password
    
    // USER ACCOUNTS
      user: user2@gmail.com
      password: password

       user: user3@gmail.com
      password: password
