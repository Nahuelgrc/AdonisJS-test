'use strict'
const theMovieDB = require('../../../api/themoviedb')

class MovieController {
    async index({ view }) {
        try {
            const movies = await theMovieDB.upcoming()
            return view.render('home', { movies: movies.data.results })
        } catch (error) {
            console.log(error.response)
        }
    }

    async search({ view, request }) {
        try {
            const searchText = request.input('searchText')
            const movies = await theMovieDB.search(searchText)
            return view.render('home', { movies: movies.data.results })
        } catch (error) {
            console.log(error.response)
        }
    }

    async getDetails({ view, params }) {
        try {
            const detailPromise = theMovieDB.getDetails(params.id)
            const creditPromise = theMovieDB.getCredits(params.id)
            const [detail, credit] = await Promise.all([detailPromise, creditPromise])
            return view.render('home', { detail: detail.data, credit: credit.data })
        } catch (error) {
            console.log(error.response)
        }
    }
}


module.exports = MovieController
