# ![alt text](https://github.com/SPLASM/SPLASM/blob/master/client/images/nodebook_small_mono.png?raw=true "nodebook logo") nodebook

A platform for beginner developers to track course progress and connect with other beginning developers.

## Team

  - [Alex Simrell](https://github.com/arsimr16 "Alex's Github")
  - [Marcus Polk](https://github.com/marcuspolk "Marcus's Github")
  - [Shane Laymance](https://github.com/slaymance "Shane's Github")
  - [Shwetha Patrachari](https://github.com/shwetachari "Shwetha's Github")

## Deployed App
https://splasm.herokuapp.com/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

This repo is meant to be used in-browser by a target audience of beginning developers.

## Requirements

- "node": 6.4.x
- "babel": "^6.23.0"
- "bcryptjs": "^2.4.3"
- "body-parser": "^1.18.2"
- "bootstrap": "^3.3.7"
- "css-loader": "^0.28.7"
- "dotenv": "^4.0.0"
- "express": "^4.16.1"
- "express-session": "^1.15.6"
- "jquery": "^3.2.1"
- "mongodb": "^2.2.31"
- "mongoose": "^4.11.13"
- "mysql": "^2.14.1"
- "mysql2": "^1.4.2"
- "node": "^8.3.0"
- "passport": "^0.4.0"
- "passport-local": "^1.0.0"
- "react": "^16.0.0"
- "react-router-dom": "^4.2.2"
- "request": "^2.83.0"
- "sequelize": "^4.13.3"
- "style-loader": "^0.18.2"
- "url-loader": "^0.6.2"
- "webpack": "^3.6.0"

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Tech Stack

#### Front-end
- React
- React Routers
  - Dynamic URL routing is handled using React Routers
  - For example, a user's username is appended to the url address when navigating to their profile
  - For more information: https://reacttraining.com/react-router/web/
- Bootstrap
- Webpack

#### Back-end
- Express
  - Express routing handles authorization-related redirects
- Passport
  - Passport handles authorization of users on login
  - Passport also handles all session management
  - For more information: http://passportjs.org/
- bcrypt
  - bcrypt hashes passwords which are stored
  - For more information: https://www.npmjs.com/package/bcrypt-nodejs

#### Database Management
- MySQL
- Sequelize

#### Testing
- Mocha
- Chai

### Roadmap

View the project roadmap [here](ROADMAP.md)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
