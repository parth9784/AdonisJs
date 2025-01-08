import { postValidator } from '#validators/post';
import type { HttpContext } from '@adonisjs/core/http'
import jwt from 'jsonwebtoken';
import UnauthenticatedException from '#exceptions/unauthenticated_exception';
import User from '#models/user';
import bcrypt from 'bcrypt';
const data=[
    {id:1,name:"parth",age:20,email:"parth@gmail.com",password:"parth123"},
    {id:2,name:"elon",age:33,email:"elon@gmail.com",password:"elon123"},
    {id:3,name:"jeff",age:33,email:"jeff@gmail.com",password:"jeff123"},
    {id:4,name:"bill",age:33,email:"bill@gmail.com",password:"bill123"},
]
export default class AuthController {
    
    public async login({request}: HttpContext){
        const data1= request.body();
        const output=await postValidator.validate(data1);
        const user=await User.findBy('email',output.email);
        // const user_data=data.find((user:any)=>user.email===output.email && user.password===output.password);
        if(!user){
            throw new UnauthenticatedException("User not found");
        }
        const pass_match=await bcrypt.compare(output.password,user.password);
        if(!pass_match){
            throw new UnauthenticatedException("Invalid password");
        }
        const token=jwt.sign({id:user.id},"PARTH",{expiresIn:60*60});
        console.log("i m auth controller...")
        return {output:user,token:token};
    }
    public async signup({request}: HttpContext){
        const data= request.body();
        const output=await postValidator.validate(data);
        const hasedpassword=await bcrypt.hash(output.password,10);
        try{
            const user_data=await User.create({...output,password:hasedpassword});
            return {output:user_data};
        }catch(error){
            throw new UnauthenticatedException("User already exists");
        }
       
        // return {output:user_data};
    }
}
