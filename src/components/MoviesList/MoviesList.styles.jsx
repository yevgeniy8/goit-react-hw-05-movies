import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Ul = styled.ul`
    list-style: none;
`;

export const Li = styled.li`
    margin: 8px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        font-size: 20px;
        color: #ff0000;
    }
`;
