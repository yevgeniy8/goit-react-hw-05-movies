import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import loadingPhoto from '../../images/loadingPhoto.jpg';
import PropTypes from 'prop-types';

import {
    StyledLinkBack,
    ContentContainer,
    LinkAdditional,
    ContainerAdditional,
} from './MovieDetailsMurkup.styled';

function MovieDetailsMurkup({ detailsMovie }) {
    const location = useLocation();
    const loc = useRef(location.state?.from ?? '/movies');
    return (
        <>
            <StyledLinkBack to={loc.current}>Go back</StyledLinkBack>
            <ContentContainer>
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
                <div>
                    <h2>{detailsMovie.original_title}</h2>
                    <p>
                        User Score {Math.round(detailsMovie.vote_average * 10)}%
                    </p>
                    <h3>Overview</h3>
                    <p>{detailsMovie.overview}</p>
                    <h4>Genres</h4>
                    <p>
                        {detailsMovie.genres?.map(item => {
                            return item.name + ', ';
                        })}
                    </p>
                </div>
            </ContentContainer>

            <ContainerAdditional>
                <p>Additional information</p>
                <ul>
                    <li>
                        <LinkAdditional to="cast">cast</LinkAdditional>
                    </li>
                    <li>
                        <LinkAdditional to="reviews">reviews</LinkAdditional>
                    </li>
                </ul>
            </ContainerAdditional>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
}

MovieDetailsMurkup.propTypes = {
    detailsMovie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
};

export default MovieDetailsMurkup;
