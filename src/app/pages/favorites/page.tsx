'use client';

import Layout from '../../layout';
import { FavoritesContainer, Item, Title } from './favoritesstyles';

export default function FavoritesPage() {
    return (
        <Layout>
            <FavoritesContainer>
                <Title>Favoritos</Title>
                <Item>Exemplo 1</Item>
                <Item>Exemplo 2</Item>
                <Item>Exemplo 3</Item>
            </FavoritesContainer>
        </Layout>
    );
}
