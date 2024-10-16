'use client';

import { useState } from 'react';
import Layout from '../layout';
import { Button, Label, ProfileContainer, Section, Title, Value } from './profilestyles';

export default function ProfilePage() {
    const [profileData] = useState({
        firstName: "Name",
        lastName: "Test",
        email: "a@gmail.com",
        password: "********",
    });

    return (
        <Layout>
            <ProfileContainer>
                <Title>Perfil</Title>
                <Section>
                    <Label>Nome</Label>
                    <Value>{profileData.firstName}</Value>
                </Section>
                <Section>
                    <Label>Sobrenome</Label>
                    <Value>{profileData.lastName}</Value>
                </Section>
                <Section>
                    <Label>E-Mail</Label>
                    <Value>{profileData.email}</Value>
                </Section>
                <Section>
                    <Label>Senha</Label>
                    <Value>{profileData.password}</Value>
                </Section>
                <Button>Editar Perfil</Button>
            </ProfileContainer>
        </Layout>
    );
}
