// Importing the necessary modules, note that const doesn't mean "Constant." specifically, rather it means "Consistent Reference"  Express is our middle ware package, mongoose is our "Sequelize" package for the mongo db.  We are setting 'app' as the handler for express

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Port assignment is the production port (for example if we were using Heroku)
const PORT = process.env.PORT || 3001;

// These parameters let the application know that we are using JSONs to pass data, and the URL path will providing the routing of user desired action
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This lets the system know that when we are operating in production, our virtual roots (I think) are the client and build folders.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// We are telling express to use the routes path defined in the require statement above
app.use(routes);

// This lets the client viewing the database to create the database on their computers.  You can use mLab in Heroku to define a database/user/password combination as well (remember to use the .env password obscuration process to avoid posting your 'password' to GitHub or you will get a worried email from one of the automated "your credentials are exposed" emails)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useCreateIndex: true,
  useNewUrlParser: true
});

// assigns the port for the purpose of URL address for inquisiting clients
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
