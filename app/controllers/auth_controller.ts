import { postValidator } from '#validators/post';
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    public async login({request}: HttpContext){
        const data= request.body();
        const output=await postValidator.validate(data);

        return {output};
    }
    public async signup(){
        return {signup: 'passed'};
    }
}

