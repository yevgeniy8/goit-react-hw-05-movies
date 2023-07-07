import axios from 'axios';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg2NjM4OTY3NWNmMzZhZmY2ODRhZjU5ZGMzOGFkNCIsInN1YiI6IjY0YTZiMWExYzNiZmZlMDBhZTc5OWRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_1sw5qXcrHMQHgqFBZg1uNM0S3Xq0grh2X0uJDSrMk',
    },
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
    );
    return response.data;
};

export const fetchMoviesById = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
    );
    return response.data;
};

export const fetchCastMovie = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        options
    );
    return response.data;
};

export const fetchReviewsMovie = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
        options
    );
    return response.data;
};

export const fetchMoviesByQuery = async query => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    );
    return response.data;
};
