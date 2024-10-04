const products = [
    { id: 1, name: 'Laptop', price: 99, category: 'electronics', rating: 4.5 },
    { id: 2, name: 'Smartphone', price: 50, category: 'Electronics', rating: 4.2 },
    { id: 3, name: 'Book', price: 15, category: 'books', rating: 3.8 },
  ];

  const criteria = {
    minPrice: 10,
    maxPrice: 100,
    category: 'electronics',
    minRating: 4
  };


  const filteredProducts = filterProducts(products, criteria);
console.log(filteredProducts);


function filterProducts(products,criteria){

    let filteredProducts=[];

    for(let product of products ){

        if(product.price > criteria.minPrice && 
            product.price < criteria.maxPrice && 
            product.rating > criteria.minRating && 
            product.category.toLowerCase() == criteria.category.toLowerCase()){

            filteredProducts.push(product);
        }

    }

    return filteredProducts;

}
  