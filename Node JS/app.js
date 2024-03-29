const path=require('path');

const express=require('express');

const expressHbs=require('express-handlebars');

const errorController=require('./controllers/error'); 

const db=require('./utility/database');
const app=express();

//------EJS--------
app.set('view engine','ejs'); 
app.set('views','views');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3001);
