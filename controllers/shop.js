const Product = require('../models/product');
const Cart = require('../models/cart');



exports.getProducts = (req, res, next) => {
    // res.sendFile('/views/shop.html'); //nao funciona e o path precisa ser absoluto
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //__dirname e uma variavel global fornecida pelo node

    const products = Product.fetchAll((products) =>{
        //usando o template engine
        res.render('shop/product-list', {
            prods: products,
            title: 'All Products',
            path: '/',
            hasProducts: products.length >0,
            productCSS: true
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;

    Product.findById(req.params.productId, product => {
        res.render('shop/product-detail', {
            product: product,
            title: 'Product Detail',
            path: '/'            
        });
    })
};  

exports.getIndex = (req, res, next) => {
    // res.sendFile('/views/shop.html'); //nao funciona e o path precisa ser absoluto
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //__dirname e uma variavel global fornecida pelo node

    const products = Product.fetchAll((products) =>{
        // console.log(products)

        //usando o template engine
        res.render('shop/index', {
            prods: products,
            title: 'Shop EJS',
            path: '/',
            hasProducts: products.length >0,
            productCSS: true
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {        
        title: 'Shop Cart',
        path: '/cart',        
        productCSS: true
    });
};

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price)
    })
    console.log(productId);
    res.redirect("/")
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {        
        title: 'Shop Orders',
        path: '/orders',        
        productCSS: true
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {        
        title: 'Checkout',
        path: '/checkout',        
        productCSS: true
    });
};