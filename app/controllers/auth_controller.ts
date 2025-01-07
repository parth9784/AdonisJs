// import { Schema, messages } from '#validators/custom';
import { postValidator } from '#validators/post';
import type { HttpContext } from '@adonisjs/core/http'
// import { data } from '../data';
// import { validate } from '@vinejs/form-validator'
import jwt from 'jsonwebtoken';
import UnauthenticatedException from '#exceptions/unauthenticated_exception';
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
        const user_data=data.find((user:any)=>user.email===output.email && user.password===output.password);
        if(!user_data){
            throw new UnauthenticatedException("User not found");
        }
        const token=jwt.sign({id:user_data.id},"PARTH",{expiresIn:60*60});
        console.log("i m auth controller...")
        return {output:user_data,token:token};
    }
    // public async signup({request}: HttpContext){
    //     const data= request.body();
    //     const output=await validate({
    //         schema: Schema,
    //         data: data,
    //         messages,
    //       })
    //       return {output};
    // }
}
