exports.get404=(req,res,next)=>{

    res.status(404).render('pageNF',{pageTitle:'Page not found',path:'/pageNF'});
    
};