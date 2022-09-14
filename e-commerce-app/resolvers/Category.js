

//using context to get products data to resover
exports.Category = {
    products: (parent, args, context) => {
        const products = context.products;
        const categoryId = parent.id;
        return products.filter(product => product.categoryId === categoryId);
    }
}