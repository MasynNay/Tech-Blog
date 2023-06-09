# Tech Blog

## Module-14 Model-View-Controller:
```md
A blog where developers can publish their blog posts and comment on other developers' posts. Uses Handlebars.js, Sequelize and express-session npm package for authentication.
```

## Table of Contents

 * [User Story](#user-story)
 * [Acceptance Criteria](#acceptance-criteria)
 * [Installation](#installation)
 * [Application Demonstrations](#application-demonstrations)
 * [Live Application](#Live-Application)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
## Installation

```md
Right click on the E-Commerce-Back-End folder and click "Open in integrated terminal" 
type "npm i" to install dependencies
type "cd .." to return to the previous directory
type "cd db" to enter the db folder
type "mysql -u root -p" then enter your password
type "source schema.sql"
type "exit" to terminate mysql
type "cd .." to return to the previous directory
type "cd seeds" to enter the seeds folder
type "node index.js" to seed the database
type "cd .." to return to the previous directory
type "npm start" to start the database
```

## Application Demonstrations

![](./public/images/demo1.png)
![](./public/images/demo2.png)
![](./public/images/demo3.png)


## Live Application

https://masyn-tech-blog.herokuapp.com