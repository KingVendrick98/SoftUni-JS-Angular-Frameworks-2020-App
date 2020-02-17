#
# SellAngGo-Angular-App

## **Introduction**

###
# SellAngGo
 **is a Web Application, created with AngularJS/CLI and using Node.js and database MongoDB for the backend. Started January 2020/ SoftUni.**

## **Description**

The project is a kind of a sale/offer website where the users can list offers, buy and sell items. It displays created offers and allows users to interract with eachother. Two types of roles are implemented in this project: admin , user(regular user with no admin rights). Depending on the role you can have access to different parts and functionalities. Users: can create offers and view all available offers including their own in details. Admins: including the regular users rights they can create, edit and delete all offers in the database.

## **Strucutre**

3 main parts:

- public
- private
- administrative

The public part is visible just for non-authentication:

- Home page background with no functionality
- Home button leading nowhere yet
- Sign In button ( leading to signin form)
- Sign Up button ( leading to signup form)

The private part is available to registered users only:

- Home page is now different static page(greeting).
- All products button - leads to a page where the offers from all users are listed
- My product button - leads to a page where the current users offers are listed
- Create product button - leads to a creation form for an offer
- Offers can be viewed in detail by having a details button(leads to details page)
- Logout button

The administrative part is available to users with the role &quot;Admin&quot;:

- Delete button on each offer in the Details page list(deletes the offer from DB)
- Edit button on each offer in the Details page list(leads to edit offer form and updates the changes on the current offer after submit)

An Admin is manually seeded into the database:

- Admin(with admin rights): Email: [admin@admin.com](mailto:admin@admin.com) Name: Admin Password: Admin

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













