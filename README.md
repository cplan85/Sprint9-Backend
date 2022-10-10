# Authentication-MEAN

This project was generated with Node, Nodemon, Express, and MongoDB for the backend.


### Built With

Angular is used for the front-end UI Components. Node and Express comprise the backend, and the database is served with MongoDB. Other packages include [bcrypt.js](https://www.npmjs.com/package/bcryptjs), cors, [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [express-validator](https://express-validator.github.io/docs/), and [mongoose](https://www.npmjs.com/package/mongoose).


* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
* [![Express.JS][Express.js]][Expressjs-url]
* ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
* [![Node.JS][Node.js]][Node-url]

Tools Used: 
* ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



## :mortar_board: **What did I learn from this project**

In this project I learned how to create <b>Rest API back-end server</b> that validates users using <b>JWT web tokens</b>. The back-end uses a MVC design pattern, and I learned to implement middlewares in the main index.js.

In addition to operations dealing with Users, I included CRUD operations for Events, which are handlded through the interfaces in the front end. Each User is defined with an array of Events, for which they may be able add, update, delete, or get events.


---
## :scroll: Endpoints
#### USERS:
 - POST Login -> localhost:4000/api/auth
 - POST Register -> localhost:4000/api/auth/new
 - GET RenewToken-> localhost:4000/api/auth/renew
#### EVENTS:
 - GET All Events -> localhost:4000/api/events
 - GET All Events by User's Email -> localhost:4000/api/events/user-events
 - POST Add Event -> localhost:4000/api/events/add
 - POST Delete Event -> localhost:4000/api/events/delete
 - POST Update Event -> localhost:4000/api/events/update
####  *MAPS:
 - GET All Maps -> localhost:4000/api/maps
 - GET All Maps by User's Email -> localhost:4000/api/maps/user-maps
 - POST Add Map -> localhost:4000/api/maps/add
 - POST Delete Map -> localhost:4000/api/maps/delete

## How to Run Back-End Server 

Clone the repo, then

### `node index.js`

Or with nodemon (recommended)

### `nodemon`

You will need bcryptsjs, cors, dotenv, express, express-validator,jsonwebtoken, and mongoose. Official installation guide: https://docs.mongodb.com/manual/installation/. Then:
### `npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose`


## Development server for Angular Front-end

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en//
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00

[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Expressjs-url]: https://expressjs.com/en/guide/routing.html

