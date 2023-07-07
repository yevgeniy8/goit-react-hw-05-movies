import { fetchTrendingMovies } from 'helpers/fetchApi';
import { useState, useEffect } from 'react';

import MoviesListTrending from 'components/MoviesListTrending/MoviesListTrending';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function api() {
            const data = await fetchTrendingMovies();
            // console.log(data);
            setMovies(data.results);
        }
        api();
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <MoviesListTrending movies={movies} />
        </div>
    );
};

export default Home;
