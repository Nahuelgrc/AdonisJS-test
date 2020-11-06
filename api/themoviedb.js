'use strict'
const axios = require('axios')
const api_key = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({ baseURL: BASE_URL });

const search = async value => {
  return api.get('search/movie', {
    params: {
      api_key,
      query: value
    }
  });
}

const upcoming = async () => {
  return api.get('movie/upcoming', {
    params: {
      api_key
    }
  });
}

const getDetails = async (id) => {
  return api.get(`movie/${id}`, {
    params: {
      api_key
    }
  });
}

const getCredits = async (id) => {
  return api.get(`movie/${id}/credits`, {
    params: {
      api_key
    }
  });
}

module.exports = {
  search,
  upcoming,
  getDetails,
  getCredits
}