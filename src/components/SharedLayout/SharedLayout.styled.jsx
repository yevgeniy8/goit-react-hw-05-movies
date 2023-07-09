import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    position: fixed;
    width: 100%;
    background-color: rgb(255, 255, 255);
`;

export const Main = styled.main`
    padding: 70px 20px 20px;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    border: 1px solid black;
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    flex-direction: row;
    padding: 20px;
    text-decoration: none;
    color: black;

    &.active {
        color: red;
    }
`;
