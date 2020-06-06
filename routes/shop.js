const express = require('express');
const path = require('path');

// const adminData = require('./admin');

const router = express.Router();

const shopController = require('../controllers/shop');

// router.get('/', (req, res, next) => {
//     // res.sendFile('/views/shop.html'); //nao funciona e o path precisa ser absoluto
//     // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //__dirname e uma variavel global fornecida pelo node

//     const products = adminData.products;
    
//     console.log(products)

//     //usando o template engine
//     res.render('shop', {
//         prods: products,
//         title: 'Shop EJS',
//         path: '/',
//         hasProducts: products.length >0,
//         productCSS: true
//     })
// });
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//definindo parametros no path
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;

