const express = require('express');
const path = require('path');
const router = require('./routes/routes');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(router);

// app.use('/users', (req, res, next) => {
//     console.log('Listing users');
//     res.send('<h1>Listing Users</h1>');
// });

// app.use('/', (req, res, next) => {
//     console.log('First call');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second call');
//     res.send('<h1>End of Line</h1>');
// });

app.listen(3000);