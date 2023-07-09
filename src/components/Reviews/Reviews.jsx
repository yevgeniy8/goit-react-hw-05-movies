import { useEffect, useState } from 'react';

import { fetchReviewsMovie } from 'helpers/fetchApi';
import { useParams } from 'react-router-dom';

function Reviews() {
    const [reviewsMovie, setReviewsMovie] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const api = async () => {
            const result = await fetchReviewsMovie(movieId);
            setReviewsMovie(result.results);
        };

        api();
    }, [movieId]);

    return (
        <div>
            <ul>
                {reviewsMovie.length ? (
                    reviewsMovie.map(item => (
                        <li key={item.id}>
                            <h2>{item.author}</h2>
                            <p>{item.content}</p>
                        </li>
                    ))
                ) : (
                    <div>Wie don't have any reviews for this movie</div>
                )}
            </ul>
        </div>
    );
}

export default Reviews;
