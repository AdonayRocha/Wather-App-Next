import styled from 'styled-components';

export const FavoritesContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
    background-color: var(--background);
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1em;
    color: var(--layout-color);
    text-align: center;
`;

export const Item = styled.h2`
    font-size: 1.5rem;
    color: var(--foreground);
    margin: 0.5em 0;
`;
