const express = require("express");
const products = require("./data")
const app = express();

const port = 2200;

// app.use((req, res, next) => {
//     console.log("this is middle ware");
//     next();
// })

app.get("/", (req, res) => {
    res.send("jai mata di..");
})
//1
app.get("/products", (req, res) => {
    res.send(products);
})

//2
app.get("/products/brand/:brand", (req, res) => {

    res.send(products.filter((item) => item.brand.toLowerCase() == req.params.brand.toLowerCase()));
})

//3
app.get("/products/title", (req, res) => {

    res.send(products.map((item) => item.title));
})

//4
app.get("/products/price/:price?", (req, res) => {
    // console.log(`hello: ${req.params.price}`);
    // const price = req.params.parseInt(price);
    const a = products.filter((item) => item.price >
        req.params.price)
    res.send(a);
})

//5
app.get("/product/category/:category", (req, res) => {
    const category = req.params;
    res.send(products.filter(item => item.category === category.category));
})

app.get("/details/:username", (req, res) => {
    res.send(`This is ${req.params.username} details`);
})

//6
// app.get("/products/item", (req, res) => {
//     const { keyword } = req.query;
//     req.send( products.filter(product =>
//         product.title.toLowerCase().includes(keyword.toLowerCase()) ||
//         product.description.toLowerCase().includes(keyword.toLowerCase())
//       ))
//     // req.send(products.filter(item => item.title.toLowerCase() === a.name.toLowerCase().toString()));
// })

//7 Implement an endpoint to retrieve products with ratings above 4.5.
app.get("/products/rating/:rating", (req, res) => {
    const ratings = req.params;
    res.send(products.filter(item => item.rating > ratings.rating));
})


//8 Create an API to fetch products with stock availability less than 50.
app.get("/products/stock/:stock", (req, res) => {
    const available = req.params;
    res.send(products.filter(item => item.stock < available.stock));
})

//9 Implement an endpoint to sort products based on their price in ascending order.
// app.get("products/priceorder/",(req,res)=>{
//     res.send()
// })

//10 Develop an API to retrieve products with a discount percentage between 5% and 15%.
app.get("/products/discount/:discount", (req, res) => {
    const discount = req.params;
    res.send(products.filter(item => item.discountPercentage > discount.discount && item.discountPercentage < 15 ))
})


//11 Create an API endpoint to retrieve products sorted by their ratings in descending order.
app.get("/products/")
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
