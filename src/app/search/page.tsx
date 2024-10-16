"use client";

import Search from '../components/Search/search';
import Layout from '../layout';
import { CenteredContainer, Title } from './search.styles';

export default function YourPage() {
    return (
        <Layout>
            <CenteredContainer>
                <Title> Busque o nome de cidades </Title>
                <Search />
            </CenteredContainer>
        </Layout>
    );
}
