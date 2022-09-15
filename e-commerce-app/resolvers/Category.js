

//using context to get products data to resover
exports.Category = {
    products: ({id: categoryId}, { filter }, { products, reviews}) => {

        //there could be two logic either filter filter products by onsale and then get products by categoryId OR
        //get products by categoryId and then filter products by onsale

        const categoryProducts = products.filter(product => product.categoryId === categoryId);
        let filteredCategoryProducts = categoryProducts;
        
        if(filter){
            const {onSale, avgRating} = filter;
            if(onSale){
                filteredCategoryProducts = filteredCategoryProducts.filter( product => {
                    return product.onSale;
                });
            }

            if([1,2,3,4,5].includes(avgRating)){
                    
                filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach((review) => {
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;

                    //console.log(avgProductRating, product.name);
                    return avgProductRating >= avgRating;

                });

            }
        }

        return filteredCategoryProducts;
    }
}