import React, { useState } from 'react';
import { Layout } from '@/containers/Layout/Layout';
import { Section } from '@/containers/Section/Section';
import { Button } from '@/components/Action/Action';
import { Trigger } from '@/containers/Modal/Modal';
import { RegisterForm } from '@/screens/RegisterForm/RegisterForm';
import { LoginForm } from '@/screens/LoginForm/LoginForm';

export const MainPage: React.FC = () => {
	const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
	const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

	const handleLoginSubmit = (email: string, password: string) => {
		console.log('Login:', { email, password });
		setIsModalOpenLogin(false);
	};

	const handleRegisterSubmit = (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => {
		console.log('Register:', { name, email, password, confirmPassword });
		setIsModalOpenRegister(false);
	};

	return (
		<Layout>
			<Section>
				<Trigger modalContent={<LoginForm onSubmit={handleLoginSubmit} />}>
					<Button variant="link" onClick={() => setIsModalOpenLogin(true)}>
						Sign In
					</Button>
				</Trigger>

				<Trigger
					modalContent={<RegisterForm onSubmit={handleRegisterSubmit} />}
				>
					<Button variant="link" onClick={() => setIsModalOpenRegister(true)}>
						Sign Up
					</Button>
				</Trigger>
			</Section>
		</Layout>
	);
};
