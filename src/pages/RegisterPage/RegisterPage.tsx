import React from 'react';
import { Card } from '@/containers/Card/Card';
import { Layout } from '@/containers/Layout/Layout';
import { Section } from '@/containers/Section/Section';
import { RegisterForm } from '@/screens/RegisterForm/RegisterForm';

export const RegisterPage: React.FC = () => {
	const handleSubmit = () => {
		console.log('RegisterSubmit');
	};

	return (
		<Layout>
			<Section>
				<Card>
					<RegisterForm onSubmit={() => handleSubmit()} />
				</Card>
			</Section>
		</Layout>
	);
};
