const { ApolloServer } = require("apollo-server");

const { MONGODB } = require("./config.js");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const User = require("./models/User");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
