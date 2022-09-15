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
        products( filter: ProductsFiterInput ): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        reviews: [Review]
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
        reviews: [Review]
    }

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFiterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String
        title: String
        comment: String
        rating: Int
        productId: String
    }

    input ProductsFiterInput {
        onSale: Boolean
    }
`;