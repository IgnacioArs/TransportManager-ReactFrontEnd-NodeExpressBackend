module.exports = {
    estaLogeado(req,res,next){
        if(req.isAuthenticated()){ // este metodo es capaz de saber si dentro del servidor 
           return next();                        //el usuario se encuentra logeado
        }
        return res.redirect('/login');
    },

    noestaLogeado(req,res,next){
        if(!req.isAuthenticated()){
                //si no esta logeado
                //que siga 
                return next();
        }
        return res.redirect('/perfil');
    }
}