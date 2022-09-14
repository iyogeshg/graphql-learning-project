const { products, categories } = require("../db");

exports.Query = {
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
    },
    listOfString: () => {
        return ["s1", "s2", "s3"];
    },
    products: () => {
        return products;
    },
    product: (parent, args, context) => {
        const productId = args.id;

        const product = products.find( (product) => product.id === productId);
        if(!product) return null;
        return product;
    },
    categories: () => {
        return categories;
    },
    category: (parent, args, context) => {
        const { id } = args; // de-structure
        return categories.find( (category) => category.id === id);
    }
}