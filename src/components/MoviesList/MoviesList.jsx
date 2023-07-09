import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Ul, StyledLink, Li } from './MoviesList.styles';

function MoviesList({ movies }) {
    const location = useLocation();
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

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default MoviesList;
