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
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
