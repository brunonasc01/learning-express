const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

// const expressHbs = require('express-handlebars');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); //allows the request to the next middleware in line
//     //se nao chamar next a request morre
// });

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');

//definir como ejs
app.set('view engine', 'ejs');

//define um template engine
// app.set('view engine', 'pug');

//define a pasta de views (padrao e views)
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended: false}));

//usa o static para permitir a leitura direta a pastas do projeto
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes); //o primeiro parametro insere um path padrao no endpoint
app.use(shopRoutes);

// app.use((req,res,next) => {
//     // res.status(404).send('<h1>Page not found</h1>');
//     //os metodos podem ser concatenados (nesse casso o .status(404))
//     // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     res.status(404).render('404', {title: 'Page Not Found EJS'})
// });
app.use(errorController.get404);

app.listen(3000);