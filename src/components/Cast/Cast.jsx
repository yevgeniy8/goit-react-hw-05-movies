import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastMovie } from 'helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';

function Cast() {
    const [castMovie, setCastMovie] = useState([]);
    const { movieId } = useParams();
    // console.log(movieId);

    useEffect(() => {
        const api = async () => {
            const result = await fetchCastMovie(movieId);
            // console.log(result);
            setCastMovie(result.cast);
        };

        api();

        // console.log(castMovie);
    }, [movieId]);

    return (
        <div>
            <ul>
                {castMovie.map(item => (
                    <li key={item.id}>
                        <img
                            src={
                                'https://image.tmdb.org/t/p/w300' +
                                item.profile_path
                            }
                            alt=""
                            width="80"
                            height="120"
                        />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cast;
