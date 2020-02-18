#
# SellAndGo-App

### SellAndGo is a Web Application, created using Angular framework for the user interface, a local server built using Node.js and MongoDB for the back-end. It is made as a project for the Angular Framework course exam in SoftUni.

##
# Summary

The Application  is similar to a trade/sell website where the users can list offers, buy and sell items. Much like &quot; Aliexpress.com &quot; and &quot;Amazon.com&quot; it displays user offers and allows the clients to interact with each other. There are two types of roles are implemented in this project: Admin and user(regular user with no admin rights). Depending on the role you can have access to different parts and functionalities. Users: can create offers and view all available offers including their own in details. Admins: including the regular users rights they can create, edit and delete all offers in the database.

##
# Build

# 3 main parts:

- public
- private
- administrative

1. **Public part** - which is accessible to everyone, without authentication. Every visitor can:

- Home page background with no functionality
- View the Home page (by clicking the brand logo);
- Sign In button ( leading to signin form)
- Sign Up button ( leading to signup form)

1. **Private part** - only for logged in users. After successful registration using the given(by the user) credentials, he can use the full functionality of the application:

- View the Home page
- View All products (by clicking All products button), see all products from users;
- View My products (by clicking My products button), see your listed products;
- Create product (by clicking Create product button) - leads to a creation form for an offer
- View details about each product (by clicking its Details button);
-  Logout button

1. **Administrative part** - only for admins. When the database is initiated for the first time, the server automatically seeds a user with Email: _admin@admin.com_, password _Admin_ and role Admin. He has the following functions:

- View the Home page
- View All products
- View Own products
- Create new offers using the Create product button
- Delete button on each offer in the Details page list(deletes the offer from DB without hesitate)
- Edit button on each offer in the Details page list(leads to edit offer form and updates the changes on the current offer after submit)
- Logout button



**Additionally**  the app offers Sign In page, Sign Up page, Logout option, Home page, Create offer, All products, Details.

## **Installation**

### **Server: &quot;Server&quot; folder**

#### **Install dependencies: **** npm install **** , start the client: **** node index**** (port: 5000).**

### **Client: &quot;Client&quot; folder (React web app)**

#### **Install dependencies: **** npm install **** , start the client: **** ng serve**** (port: 4200).**

# AngularSellAndGoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).













