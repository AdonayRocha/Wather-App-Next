'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Layout from '../layout';

// Definindo a interface para os dados da cidade
interface CityData {
    cidade: string;
    estado: string;
    clima: WeatherForecast[];
}

// Definindo a interface para a previsão do tempo
interface WeatherForecast {
    data: string;
    condicao: string;
    min: number;
    max: number;
    condicao_desc: string;
}

export default function HomePage() {
    const searchParams = useSearchParams();
    const cityCode = searchParams.get("cityCode") || "244"; // Código da cidade padrão
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cityData, setCityData] = useState<CityData | null>(null);
    const [forecast, setForecast] = useState<WeatherForecast[]>([]);

    const dateFormat = (data: string) => {
        return new Date(data).toLocaleDateString("pt-br", { timeZone: "UTC" });
    };

    const loadCity = async (cityCode: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
            );
            const data = await response.json();
            setCityData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const loadForecast = async (cityCode: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}/6`
            );
            const data = await response.json();
            setForecast(data.clima);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadCity(cityCode);
        loadForecast(cityCode);
    }, [cityCode]);

    return (
        <Layout>
            <div>
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    <div>
                        {cityData && cityData.clima && cityData.clima.length > 0 && (
                            <div>
                                <h2>
                                    {cityData.cidade}/{cityData.estado}
                                </h2>
                                <p>
                                    Min <span>{cityData.clima[0].min}&#176;C</span> / Max
                                    <span>{cityData.clima[0].max}&#176;C</span>
                                </p>
                                <p>{cityData.clima[0].condicao_desc}</p>
                            </div>
                        )}

                        <div>
                            {forecast.length > 0 &&
                                forecast.map((item) => (
                                    <div key={item.data}>
                                        <span>{dateFormat(item.data)} </span>
                                        <span>Min: {item.min}&#176;C </span>
                                        <span>Max: {item.max}&#176;C</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
