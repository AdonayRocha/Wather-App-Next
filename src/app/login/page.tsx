'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Label, LoginContainer, Section, Title, Input } from './loginstyles';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        router.push('/home'); 
    };

    const handleCancel = () => {
        router.back();
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
