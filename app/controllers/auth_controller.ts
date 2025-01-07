// import { Schema, messages } from '#validators/custom';
import { postValidator } from '#validators/post';
import type { HttpContext } from '@adonisjs/core/http'
// import { validate } from '@vinejs/form-validator'
export default class AuthController {
    public async login({request}: HttpContext){
        const data= request.body();
        const output=await postValidator.validate(data);
        console.log("i m auth controller...")
        return {output};
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
