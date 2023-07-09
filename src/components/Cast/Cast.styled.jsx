import styled from '@emotion/styled';

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Li = styled.li`
    display: flex;
    gap: 5px;
    width: calc((100% - 60px) / 5);
    min-width: 175px;
    background-color: rgb(182, 183, 183);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
        rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;
