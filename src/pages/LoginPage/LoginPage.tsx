import React from 'react';
import { Card } from '@/containers/Card/Card';
import { Layout } from '@/containers/Layout/Layout';
import { Section } from '@/containers/Section/Section';
import { LoginForm } from '@/screens/LoginForm/LoginForm';

export const LoginPage: React.FC = () => {
	const handleSubmit = () => {
		console.log('LoginSubmit');
	};

	return (
		<Layout>
			<Section>
				<Card>
					<LoginForm onSubmit={() => handleSubmit()} />
				</Card>
			</Section>
		</Layout>
	);
};
