import axios from 'axios';

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cb25000b76709bf0392770b8466c4967',
        language: 'es-ES'
    }
})


export default movieDb;