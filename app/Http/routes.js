'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/teszt', 'PostController.index')



/*
npm run dev + rs - elindítás+frissítés
node ace make:controller Post - controller létrehozása

http://localhost:3333/teszt - itt érhető el
*/
