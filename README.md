# Project Description

It is a comprehensive contact management system built to streamline the process of handling contact records. The application allows users to add new contacts, view a list of contacts, edit contact details, and delete contacts when needed.

# Features
1.Created a Contact Management feature to help users of the system to keep a track of important contact information of customers / clients.

2.Facilitates operations like adding, viewing, updating, and deleting contact details all in one place.

3.Implemented featured like pagination & sorting to the table for better usability.

4.Used Material UI for simple UI for user readability.

5.Implemented error handling for invalid or duplicate data

# Technogis used

 1.  Frontend: ReactJS, MUI

2. Backend: NodeJS, ExpressJS
  
3. Database: MongoDB

## MongoDB as Database

1.MongoDB is used as database as it facilitates quicker write operations and It also gives flexibility while inserting data, unlike MySQL where schema is rigid.

2.some contacts may not have Company name or Job Title. If using MySQL, these entries would be stored as NULL. This could result in having too many NULL values. Using MongoDB gives this flexibility to insert data, while taking less storage and not having a rigid architecture.

# How to run the application

1. Clone repository: git clone [https://github.com/Anuj0918/Contact-management.git]
 
2. Install dependencies: npm install

3. Setup MongoDB Atlas database and modify database configuration in .env file.

4. Run the application now: npm start

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Challenges faced::

1.I faced difficulty while making this proj were related to frontend part. While I was able to code backend part well, I struggled a bit while working on UI.
For example, it took me some time to figure out how to display a contact when user wants to Edit it.

2.I also got stuck when working on the Sorting feature and dealing with mUI was difficult in begining.  I implemented Sorting feature by making user click on the attribute they want to sort with respect to.
Clicking on the column name once will sort in ascending order and clicking again will sort in descending order and so on.
 











  
