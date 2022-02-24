const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const connect = require("./database");

const app = express();
connect();
app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      messageId: "test",
    },
  })
);

app.listen(3000, () => console.log("Server on port 3000"));
