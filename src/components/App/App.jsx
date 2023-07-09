import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import Home from 'page/Home';
import { lazy } from 'react';

const Movies = lazy(() => import('page/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};
