'use client';

import { FavoritesContainer, Item, Title } from './favoritestyles';

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
