const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const mlab_login = require('./login_to_mlab')

const app = express()

mlab_login(mongoose);
mongoose.connection.once('open', ()=>{console.log("\nConnected to MongoDB instance!\n")})

// Express doesn't know how to handle GraphQL, 
// so it will pass the requests to...
app.use('/graphql', graphqlHTTP({
    schema: schema, 
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Listening on port 4000...")
})