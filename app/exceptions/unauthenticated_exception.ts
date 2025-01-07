import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http';

export default class UnauthenticatedException extends Exception {
  static status = 500
  constructor(message: string) {
    super(message);
  }
  public handle(error: any, ctx: HttpContext) {
    return ctx.response.status(401).json({
        message: error.message
    });
  }
}
