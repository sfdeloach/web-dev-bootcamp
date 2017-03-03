# Authentication

## Introduction to Auth
* Two approaches
 - Use tools such as PassportJS, Passport Local, Passport Local Mongoose
 - Build authentication from the ground up with no tools
* Walk through auth flow
* Discuss sessions
 - Express Session

## Code Along Part 1
* Set up app directory structure
 - views (for html templates)
 - models (for db schemas)
* Install needed packages
 - body-parser (NodeJS body parsing middleware, parse incoming requests bodies under the req.body property)
 - ejs (embedded Javascript templates commonly used in html files)
 - express (fast, unopinionated, minimalist web framework)
 - express-session (simple session middleware for Express)
 - mongoose (a MongoDB object modeling tool designed to work in an asynchronous environment)
 - passport (simple, unobtrusive authentication for NodeJS)
 - passport-local (local username and password authentication strategy for Passport)
 - passport-local-mongoose (mongoose plugin that simplifies building username and password login with Passport)
* Add root route and template
* Add secret route and template

## Code Along Part 2
* Create User model
* Configure passport

## Code Along Part 3
* Add Register route
* Add Register form

## Code Along Part 4
* Add login route
* Add login form

## Code Along Part 5
* Add logout route
* Add isLoggedIn middleware
