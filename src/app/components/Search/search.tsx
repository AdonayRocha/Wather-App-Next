"use client";

import { useState } from 'react';
import {
    Button,
    Input,
    List, ListItem,
    SearchContainer
} from './search.styles';

interface City {
    id: number;
    nome: string;
    estado: string;
}

const Search = () => {
    const [cityName, setCityName] = useState<string>('');
    const [cityList, setCityList] = useState<City[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    };

    const loadCities = async () => {
        if (!cityName) return;
        try {
            const response = await fetch(
                `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
            );

            if (!response.ok) {
                throw new Error('Erro ao buscar cidades');
            }

            const data = await response.json();
            setCityList(data);
        } catch (error) {
            console.error('Erro ao carregar cidades:', error);
        }
    };

    return (
        <SearchContainer>
            <Input
                type="text"
                onChange={handleChange}
                placeholder="Digite o nome da cidade"
            />
            <Button onClick={loadCities}>Buscar</Button>
            <List>
                {cityList.map((city) => (
                    <ListItem key={city.id}>
                        {city.nome} / {city.estado}
                    </ListItem>
                ))}
            </List>
        </SearchContainer>
    );
};

export default Search;
