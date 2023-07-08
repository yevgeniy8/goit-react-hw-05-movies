import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMoviesById } from '../helpers/fetchApi';
import { useState } from 'react';
import { useRef } from 'react';
import { Suspense } from 'react';

import loadingPhoto from '../images/loadingPhoto.jpg';

function MovieDetails() {
    const [detailsMovie, setDetailsMovie] = useState({});
    const { movieId } = useParams();

    const location = useLocation();
    const loc = useRef(location.state?.from ?? '/movies');

    // console.log(loc)
    // console.log(location);

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

    // console.log(detailsMovie);

    return (
        <div>
            <Link to={loc.current}>Go back</Link> <br />
            <img
                src={
                    detailsMovie.poster_path
                        ? 'https://image.tmdb.org/t/p/w300' +
                          detailsMovie.poster_path
                        : loadingPhoto
                }
                width="250"
                height="400"
                alt=""
            />
            <h2>{detailsMovie.original_title}</h2>
            <p>User Score {Math.round(detailsMovie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{detailsMovie.overview}</p>
            <h4>Genres</h4>
            <p>
                {detailsMovie.genres?.map(item => {
                    return item.name + ', ';
                })}
            </p>
            <div>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">reviews</Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MovieDetails;
