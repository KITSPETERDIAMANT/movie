import axios from 'axios'

export default axios.create({
  baseURL: ' https://movie-database-imdb-alternative.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    'x-rapidapi-key': '6f3eb36253mshfa7404d2bf7d4dbp1bef80jsnc08763bb5113'
  }
})
