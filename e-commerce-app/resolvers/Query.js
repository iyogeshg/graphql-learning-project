

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
    products: (parent, args, { products}) => {
        return products;
    },
    product: (parent, { id }, { products}) => {
        const product = products.find( (product) => product.id === id);
        if(!product) return null;
        return product;
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
    category: (parent, { id }, { categories }) => {
        return categories.find( (category) => category.id === id);
    }
}