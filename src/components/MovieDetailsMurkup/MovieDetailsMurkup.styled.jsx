import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const StyledLinkBack = styled(Link)`
    display: block;
    text-decoration: none;
    color: black;
    padding: 10px 20px;
    width: 70px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const ContainerAdditional = styled.div`
    margin-bottom: 10px;
`;

export const LinkAdditional = styled(NavLink)`
    text-decoration: none;
    padding-left: 20px;
    color: black;

    &:hover,
    &.active {
        color: red;
    }
`;
