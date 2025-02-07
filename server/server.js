const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/schema');

const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
