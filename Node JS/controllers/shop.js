const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'shop', 
            path: '/products'
        });
    });
};

exports.getProduct = (req, res, next) => {
const prodId=req.params.productID;
Product.findById(prodId,product=>{
console.log(product);
});
res.redirect('/');
}

exports.getIndex=( req,res,next)=>{
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'shop', 
            path: '/'
        });
    });   
};
exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
    path:'/cart',
    pageTitle:'your Cart'    
    });
};
exports.getOrders=(req,res,next)=>{
    res.render('shop/orders',{
    path:'/orders',
    pageTitle:'your Orders'    
    });
};


exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
    path:'/checkout',
    pageTitle:'checkout'    
    });
};