import styled from 'styled-components';

export const ProfileContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1em;
    color: var(--layout-color);
    text-align: center;
`;

export const Section = styled.div`
    margin-bottom: 1.5em;
`;

export const Label = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 0.5em;
    color: var(--foreground);
`;

export const Value = styled.p`
    font-size: 1rem;
    color: var(--foreground);
    padding: 0.5em 1em;
    border: 1px solid var(--foreground);
    border-radius: 4px;
`;

export const Button = styled.button`
    background-color: var(--layout-color);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #005bb5;
    }
`;
