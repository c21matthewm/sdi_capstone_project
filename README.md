# PROJECT: **SPACE BRIDGE** 
Space Bridge is an app that addresses the current lack of centralized information about the status of a satellite, offering a user-friendly platform for users to retrieve and update satellite status in real-time. It allows both users and admin to contribute and access aggregated reports, ensuring an efficient and comprehensive view of all satellites in their AOR.

## FUNCTIONALITIES
**User Abilities:**
  - Create an account
  - Log into an existing account
  - View a list of all satellites
  - Add and remove satellites to a personalized dashboard
  - Submit a report about a satellite's status
  - See the total number of reports per satellite
  - View a specific satellite report
  - View a reports list for a satellite
  - View details about a specific satellite
  - Line chart displays the data trend of number of reports for a satellite submitted over twelve months
  - Bar graph displays ratio of different satellite interference reasons for each satellite 
  - Report list displays all reports for all satellites with ability to filter and order reports
  - Map displays a marker of the user location for each report
  - Selecting a marker will display a popup with a link to the direct report
  - Submitting a new report automatically populates a new marker
  - Header bar and return links for ease of navigation across the website
  - Log out

**Admin Abilities:**
  - All USER abilities extends to ADMIN accounts
  - Add a new satellite to the database 
  - Remove a satellite
  - Manage satellites in a constellation (personal dashboard)
  - Change the status of a satellite
  - Archive reports

## INSTALLATION:

1) **Install Support**


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
2) **Configure Docker Support**


    *Open Docker Desktop. From the terminal, cd into backend*
      ```
        docker pull postgres:latest
        docker run --rm --name workshop-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
        docker exec -it <PSQL-Container-ID> bash
      ```

3) **Link Backend Server to Database**


    *Start a new terminal, cd into backend*
    ```
      psql -U postgres
      CREATE database satellite_status;
      \c satellite_status
    ```

4) **Note: If Docker is ever closed due to application restart or PC restart, spin up the container from the image again**
    ```
      docker run --rm --name workshop-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
    ```

5) **Seed the Database with initial data**
    ```
      npx knex migrate:rollback
      npx knex migrate:latest
      npx knex seed:run
    ```

6) **Launch full stack application**
  *Launch backend and frontend servers*
    ```
      npm start
    ```

### DEFAULT ACCOUNTS
--- 
  #### ADMIN ACCOUNTS

    // INSIGHT
    - username: admin@gmail.com
    - password: password

    // OUTSTAR:
    - username: user@gmail.com
    - password: password
    
  #### USER ACCOUNTS
    - username: user2@gmail.com
    - password: password

    - username: user3@gmail.com
    - password: password
