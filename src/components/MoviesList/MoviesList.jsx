import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Ul, StyledLink, Li } from './MoviesList.styles';

function MoviesList({ movies }) {
    const location = useLocation();
    // console.log(location);
    return (
        <div>
            <Ul>
                {movies.map(item => {
                    return (
                        item.title && (
                            <Li key={item.id}>
                                <StyledLink
                                    to={`/movies/${item.id}`}
                                    state={{ from: location }}
                                >
                                    {item.title}
                                </StyledLink>
                            </Li>
                        )
                    );
                })}
            </Ul>
        </div>
    );
}

export default MoviesList;
