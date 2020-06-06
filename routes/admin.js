const express = require('express');
const path = require('path');
const rootDir = require('../util/path')
const router = express.Router();

const adminController = require('../controllers/admin');

const products = []

//antes do controller
// router.get('/add-product', (req, res, next) => {
//     console.log(rootDir)
//     // console.log('In another middleware');
//     // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //__dirname e uma variavel global fornecida pelo node
//     res.render('add-product',{
//         title: 'Add-Product EJS',
//         path: '/admin/add-product',
//         layout:false
//     })
//     // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'); //novo metodo do express
// });

//apos o controller
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

//o app.use por ser alterado para app.get ou app.post
// router.post('/add-product', (req, res, next) => {
//     // console.log(req.body);
//     products.push({title: req.body.title});
//     res.redirect('/')   
// });
router.post('/add-product', adminController.postAddProduct);

// exports.routes = router;
// exports.products = products;
module.exports = router;