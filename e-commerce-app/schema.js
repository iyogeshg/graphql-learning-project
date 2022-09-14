const { gql } = require("apollo-server");

//Scalar Types -> String, Int, Float, Boolean, ID (will learn later)
// Add "!" at the end to make it not null constraint eg. hello: String!
// every type defination requires a resolver for it.

//schema
exports.typeDefs = gql`
    type Query {
        hello: String
        noOfAnimals: Int
        price: Float
        isLearning: Boolean
        listOfString: [String!]
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        image: String!
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`;