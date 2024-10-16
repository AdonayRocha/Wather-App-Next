"use client";  // Adiciona isso no início do arquivo

import { useState } from 'react';
import Layout from '../layout';

export default function Search() {
    const [cityName, setCityName] = useState('');
    const [cityList, setCityList] = useState([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    };

    const loadCities = async () => {
        try {
            const response = await fetch(
                `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
            );
            const data = await response.json();
            setCityList(data);
        } catch (error) {
            console.error('Erro ao carregar cidades:', error);
        }
    };

    return (
        <Layout>
            <h1>Buscar Cidades</h1>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Digite o nome da cidade"
            />
            <button onClick={loadCities}>Buscar</button>
            <ul>
                {cityList.map((city: any) => (
                    <li key={city.id}>
                        {city.nome} / {city.estado}
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
