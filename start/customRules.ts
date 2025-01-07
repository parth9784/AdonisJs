// import { Validator } from "@vinejs/vine/types";
import {validator} from "@ioc:Adonis/Core/Validator"
validator.rule("custom",(value:any,[max,min]:any[],options:any)=>{
    if(value<min || value>max){
        return options.errorReport (`${options.field} must be between ${min} and ${max}`)
    }
})