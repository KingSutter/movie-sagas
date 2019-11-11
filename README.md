# To-Do List

An application for viewing movies and genres and editing the title and description as needed.

NOTE: If you would like to skip the installation onto your local machine, you can head to [my online version of app](https://movie-list-willsutter.herokuapp.com/#/)


## Installation

1. [Install Node.js](https://nodejs.org/en/download/)
2. Open the terminal
3. Use the command line to navigate to the project folder
    - Use the command `cd  ~/` and type the file path to the project after the forward slash `/`
4. Use the command line to install all of the required modules using the command `npm i`:
5. Set up your local database (name it as "saga_movies_weekend") by copy + pasting everything in the database.sql file, then run every query.
6. Run the program by opening an extra terminal tab (`Command` + `T`) and executing both the following two commands seperately on each tab:
    - `npm run server`
    - `nom run client`
7. Open a browser and head to [http://localhost:3000](http://localhost:3000), if the run client command doesn't do this for you.

## Usage

- Users can view all movies in the DB on the main page
- Users can click on the poster to view more information about that movie
- Users can edit title and description information as needed