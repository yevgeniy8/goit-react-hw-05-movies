import { useParams } from 'react-router-dom';

import photo from '../../images/photo.jpg';

import { fetchCastMovie } from 'helpers/fetchApi';
import { useEffect, useState } from 'react';

import { Ul, Li } from './Cast.styled';

function Cast() {
    const [castMovie, setCastMovie] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const api = async () => {
            const result = await fetchCastMovie(movieId);
            setCastMovie(result.cast);
        };

        api();
    }, [movieId]);

    return (
        <div>
            <Ul>
                {castMovie.map(item => (
                    <Li key={item.id}>
                        <img
                            src={
                                item.profile_path
                                    ? 'https://image.tmdb.org/t/p/w300' +
                                      item.profile_path
                                    : photo
                            }
                            alt=""
                            width="80"
                            height="120"
                        />
                        <div>
                            <p>{item.name}</p>
                            <p>{item.character}</p>
                        </div>
                    </Li>
                ))}
            </Ul>
        </div>
    );
}

export default Cast;
