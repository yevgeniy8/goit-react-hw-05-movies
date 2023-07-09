import { useEffect, useState } from 'react';

import SearchMovies from 'components/SearchMovies/SearchMovies';
import { fetchMoviesByQuery } from 'helpers/fetchApi';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const name = searchParams.get('name');

    useEffect(() => {
        if (!name) {
            return;
        }
        const api = async () => {
            const result = await fetchMoviesByQuery(name);
            setMovies(result.results);
        };

        api();
    }, [name]);

    const handleSubmit = query => {
        setSearchParams({ name: query });
    };

    return (
        <div>
            <SearchMovies onSubmit={handleSubmit} />

            {movies && <MoviesList movies={movies} />}
        </div>
    );
}

export default Movies;
