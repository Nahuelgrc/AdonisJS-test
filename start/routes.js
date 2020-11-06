'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.any('*', function * (request, response) {
//    yield response.sendView('home')
//  })
//Route.any('*', ({ view }) => view.render('home'))
//Route.any('/', 'MovieController.index')

Route.get('/favicon.ico', (req, res) => res.status(204));

Route.get('/', 'MovieController.index')

Route.post('/', 'MovieController.search')

Route.get('/:id', 'MovieController.getDetails')
