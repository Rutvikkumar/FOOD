const { model } = require("mongoose");




const wish = async (req,res) =>{

    try{

        res.render("shop-wishlist");

    }catch(error){
        console.log(error);        
    }


}



const compare = async(req,res)=>{

    try{

        res.render("shop-compare");

    }catch(error){
        console.log(res.error);
    }

}


const cart = async (req,res) =>{

    try{

        res.render("shop-cart");

    }catch(error){
        console.log(error);
    }
}


module.exports = {
    compare,
    wish,
    cart
}