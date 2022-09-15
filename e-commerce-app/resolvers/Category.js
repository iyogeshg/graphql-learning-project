

//using context to get products data to resover
exports.Category = {
    products: (parent, { filter }, context) => {

        //there could be two logic either filter filter products by onsale and then get products by categoryId OR
        //get products by categoryId and then filter products by onsale
        let filteredProducts = context.products;
        if(filter){
            filteredProducts = filteredProducts.filter( product => product.onSale === filter.onSale);
        }
        const categoryId = parent.id;
        return filteredProducts.filter(product => product.categoryId === categoryId);
    }
}