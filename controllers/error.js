exports.get404 = (req,res,next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    //os metodos podem ser concatenados (nesse casso o .status(404))
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {path: '/', title: 'Page Not Found EJS'})
};