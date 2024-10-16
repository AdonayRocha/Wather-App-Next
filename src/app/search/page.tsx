"use client";  

import Layout from '../layout';
import Search from '../components/Search/search'; 
import { Title, CenteredContainer } from './searchstyles'; 

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
