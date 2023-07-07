import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MoviesListTrending({ movies }) {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <ul>
                {movies.map(item => {
                    return (
                        item.title && (
                            <li key={item.id}>
                                <Link
                                    to={`/movies/${item.id}`}
                                    state={{ from: location }}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    );
                })}
            </ul>
        </div>
    );
}

export default MoviesListTrending;
