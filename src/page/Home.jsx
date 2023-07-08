import { fetchTrendingMovies } from 'helpers/fetchApi';
import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function api() {
            const data = await fetchTrendingMovies();
            console.log(data);
            setMovies(data.results);
        }
        api();
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <MoviesList movies={movies} />
        </div>
    );
};

export default Home;
