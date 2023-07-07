import React, { useEffect } from 'react';

import { fetchReviewsMovie } from 'helpers/fetchApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Reviews() {
    const [reviewsMovie, setReviewsMovie] = useState([]);
    const { movieId } = useParams();
    // console.log(movieId);

    useEffect(() => {
        const api = async () => {
            const result = await fetchReviewsMovie(movieId);
            // console.log(result);
            setReviewsMovie(result.results);
        };

        api();
    }, [movieId]);

    return (
        <div>
            <ul>
                {reviewsMovie.map(item => (
                    <li key={item.id}>
                        <h2>{item.author}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Reviews;
