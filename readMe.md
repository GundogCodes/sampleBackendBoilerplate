A sample basic boilerplate to create an API from scratch:

(1)
Before You Begin, in terminal, run:

npm init -y (creating a node enviroment)
git init (creating a git repository)
npm i {
    express, (controlling/creating the server)
    mongoose, (controlling DB)
    dotenv, (connecting to DB)
    jsx-view-engine, (creating views)
    jest, (testing app)
    supertest, (allowing HTTP requests during tests)
    mongodb-memory-server, (creatinglocal DB during testing)
    artillery@1.7.9, (load testing)
    --save-dev, ()
    method-override, (overriding/manipulating HTTP requests)
    bcrypt, (crypting & verifying data)
    jsonwebtoken, (creating login token for user's browser)
    morgan (logging HTTP requests)
}

(2)
In package.json, scripts block, add:

"dev":"nodemon server,js" (to run server) (npm run dev <-- command in terminal to start)

(3)
In .gitignore, add: (this will ignore these files that have sensitive info when you commit to github)
/node_modules
.env

(4)
When testing:

In package.json, scripts block, add:
"load":"artillery run tests/artillery.yml" (to run load testing) (npm run load <-- command in terminal to start)

After scripts block, add:
(dont forget the comma)

"jest"{
    "testEnvironment":"node" ( to run tests) (npm run test <-- command in terminal to start)
}
