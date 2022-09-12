const { ApolloServer, gql } = require("apollo-server");

//Scalar Types -> String, Int, Float, Boolean, ID (will learn later)
// Add "!" at the end to make it not null constraint eg. hello: String!
// every type defination requires a resolver for it.

//schema
const typeDefs = gql`
    type Query {
        hello: String
        noOfAnimals: Int
        price: Float
        isLearning: Boolean
    }
`;

//resolvers
const resolvers = {
    Query: {
        hello: () => {
            return "Hello Yogesh";
        },
        noOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 100.9;
        },
        isLearning: () => {
            return true;
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});