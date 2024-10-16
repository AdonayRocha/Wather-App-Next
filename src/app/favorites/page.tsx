'use client';

import Favorites from '../components/Favorite/favorite';
import Layout from '../layout';

export default function FavoritesPage() {
    const favoriteItems = ['Exemplo 1', 'Exemplo 2', 'Exemplo 3'];

    return (
        <Layout>
            <Favorites items={favoriteItems} />
        </Layout>
    );
}
