/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js';
import { HttpContext } from '@adonisjs/core/http';
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', '#controllers/auth_controller.login').use(middleware.another());
router.post('/signup', '#controllers/auth_controller.signup');
router.post('/posting', async ()=>{
  return {
    posting: 'passed',
  };
})
router.get('/testing1',()=>{
  return {testing:"testing1"}
}).use((_,next)=>{
  console.log("testing1");
  next();
})
router.group(()=>{
  router.get('/testing2',()=>{
    return {testing:"testing2"}
  })
  router.get('/testing3',()=>{
    return {testing:"testing3"}
  })
}).prefix('ultimate')

router.post('/testing4/:id',({response}:HttpContext)=>{
  response.status(200).send({testing:"testing4"})
}).use(({request,params}:HttpContext,next)=>{
  console.log(request.body());
  console.log(params.id)
  console.log(request.intended())
  console.log(request.method())
  console.log(request.ip())
  next();
})

