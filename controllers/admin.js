const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // console.log('In another middleware');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //__dirname e uma variavel global fornecida pelo node
    res.render('admin/add-product',{
        title: 'Add-Product EJS',
        path: '/admin/add-product',
        layout:false
    });
};

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title: req.body.title});
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    
    product.save();
    res.redirect('/')   
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) =>{
        res.render('admin/products', {
            prods: products,
            title: 'Admin Products',
            path: '/admin/products'           
        });
    });
};
