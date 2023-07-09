import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledNavLink, Nav, Header, Main } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <div>
            <Header>
                <Nav>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </Nav>
            </Header>

            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </div>
    );
};

export default SharedLayout;
