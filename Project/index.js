const express = require('express')
const app = express()
const port = 3000

const home = require('./routes/home')
const menu = require('./routes/menu')

const cookieParser = require('cookie-parser');
app.use(cookieParser("Test"));

app.use(express.static('public'));

app.use('/', home)

app.use('/menu', menu)

// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
