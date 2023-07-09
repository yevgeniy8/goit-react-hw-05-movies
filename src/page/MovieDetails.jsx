import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetailsMurkup from 'components/MovieDetailsMurkup/MovieDetailsMurkup';

import { fetchMoviesById } from '../helpers/fetchApi';

function MovieDetails() {
    const [detailsMovie, setDetailsMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            return;
        }

        const api = async () => {
            const data = await fetchMoviesById(movieId);
            setDetailsMovie(data);
        };

        api();
    }, [movieId]);

    return detailsMovie && <MovieDetailsMurkup detailsMovie={detailsMovie} />;
}

export default MovieDetails;
