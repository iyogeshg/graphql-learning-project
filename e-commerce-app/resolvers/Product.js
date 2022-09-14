
//destructed the parent to get categoryID and context to get categories
exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find(category => category.id === categoryId);
    },
    reviews: ({ id: productId}, args, { reviews}) => {
        return reviews.filter( review => review.productId === productId);
    }
}