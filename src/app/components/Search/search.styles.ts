import styled from 'styled-components';

export const SearchContainer = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background-color: #1f1f1f;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    width: 100%; 
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1rem;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #808080;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;

    &:hover {
        background-color: #005bb5;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
    color: #fff;
`;

export const ListItem = styled.li`
    font-size: 0.9rem;
`;
