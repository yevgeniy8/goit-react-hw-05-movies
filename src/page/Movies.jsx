import React, { useEffect, useState } from 'react';

import SearchMovies from 'components/SearchMovies/SearchMovies';
import { fetchMoviesByQuery } from 'helpers/fetchApi';
import { useLocation, useSearchParams } from 'react-router-dom';

import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    // const location = useLocation();
    // console.log(location);

    const name = searchParams.get('name');
    // console.log(name);

    useEffect(() => {
        if (!name) {
            return;
        }
        const api = async () => {
            const result = await fetchMoviesByQuery(name);
            // console.log(result);
            setMovies(result.results);
        };

        api();
    }, [name]);

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        setSearchParams({ name: form.elements.name.value });
        form.reset();
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <button type="submit">Search</button>
            </form>

            {movies && <MoviesList movies={movies} />}
        </div>
    );
}

export default Movies;
