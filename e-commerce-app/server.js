const { ApolloServer } = require("apollo-server");
const { typeDefs } = require( "./schema");
const { Query } = require( "./resolvers/Query");
const { Category } = require( "./resolvers/Category");
const { Product } = require( "./resolvers/Product");

// passing db data to context to get data by using context in resolver
const { categories, products } = require("./db");



const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query,
        Category,
        Product,
    },
    context: {
        products,
        categories,
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});