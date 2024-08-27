const bcryptjs =require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel =require ('../model/userModel')

const registerUser = async (email,nome,password)=>{

    const userExists= await userModel.findUserByEmail(email);
    if(userExists){
        throw new Error('Usuário com este e-mail já existe')
    }

    const hashedPassword =await bcryptjs.hash(password,10)
    await userModel.createUser(email,nome,hashedPassword);
}

const loginUser =async (email,password)=>{
    const user = await userModel.findUserByEmail(email)
    if(!user || !(await bcryptjs.compare(password,user.senha))){
        throw new Error('Usuário ou senha incorretos!')
    }

    const token =jwt.sign({id:user.id,nome:user.nome,email:user.email}, process.env.JWT_SECRET, {expiresIn:'10m'})
    return token;
}

module.exports = {
    registerUser,
    loginUser
}