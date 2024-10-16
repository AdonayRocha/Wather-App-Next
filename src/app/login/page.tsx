'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Input, Label, LoginContainer, Section, Title } from './login.styles';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        router.push('/home');
    };

    const handleCancel = () => {
        router.push('/login');
    };

    return (
        <LoginContainer>
            <Title>Login</Title>
            <Section>
                <Label>E-mail</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Section>
            <Section>
                <Label>Senha</Label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Section>
            <Button onClick={handleLogin}>Entrar</Button>
            <Button onClick={handleCancel}>Cancelar</Button>
        </LoginContainer>
    );
}
