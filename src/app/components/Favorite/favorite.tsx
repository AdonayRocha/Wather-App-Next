'use client';

import { FavoritesContainer, Item, Title } from './favorite.styles';

interface FavoritesProps {
    items: string[];
}

export default function Favorites({ items }: FavoritesProps) {
    return (
        <FavoritesContainer>
            <Title>Favoritos</Title>
            {items.map((item, index) => (
                <Item key={index}>{item}</Item>
            ))}
        </FavoritesContainer>
    );
}
