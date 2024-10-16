import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c2c2c;
    padding: 2em;
    border-radius: 10px;
    box-shadow: none;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1em;
    color: #ffffff;
    text-align: center;
`;

export const Section = styled.div`
    margin-bottom: 1.5em;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 1.2rem;
    margin-bottom: 0.5em;
    color: #ffffff;
    display: block;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    border: none;
    border-radius: 4px;
    background-color: #3c3c3c;
    color: #ffffff;
    
    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: #808080;
    color: white;
    border: none;
    border-radius: 80px;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1em;

    &:hover {
        background-color: #005bb5;
    }
`;
