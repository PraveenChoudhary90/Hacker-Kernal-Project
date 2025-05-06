const ProInsertModel = require("../Model/ProInsertModel");
const ProModel = require("../Model/ProModel");






const Login = async(req,res)=>{
    const { email, password} = req.body;
    try {
        const User = await ProModel.findOne({email:email})
        if(!User){
            res.send({msg:"Invalid Email"})
        }
        else if(User.password!=password){
            res.send({msg:"Inavlid Password"});
        }
        res.send({msg:"Your Are login successfully",User:User});
        console.log(User);
    } catch (error) {
        console.log(error);
    }

}


const InsertData = async(req,res)=>{
    const {name, price} = req.body;
    const Data =  await ProInsertModel.create({
        name:name,
        price:price
    })
    res.send({msg:"Product is Insertd"});
}

const DisplayData = async(req,res)=>{
    const data = await ProInsertModel.find();
    res.send(data);
}


module.exports = {
    Login,
    InsertData,
    DisplayData
}