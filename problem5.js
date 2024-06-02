var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];

function storeAnalysis(store){
    let newstore =[...store]
    // print name and rating
    newstore.forEach(obj=>{
        console.log(`Name:${obj.name},Rating:${obj.rating}`)
    });
    // Calculate and print the average rating.
    let ratingsum =newstore.reduce((acc,curr)=>acc + curr.rating,0);
    let averagerating =ratingsum/newstore.length
    console.log(`Average Rating: ${averagerating}`)
    // Identify and print the name of the product with the minimum price.
    let minimumpriceproduct = newstore.reduce((min, pro)=>{
        if(!min || pro.price<min.price){
            return pro;
        }
        return min;
    },null)
    console.log(`product with the minimum price: ${minimumpriceproduct.name}`)
}

storeAnalysis(store);
