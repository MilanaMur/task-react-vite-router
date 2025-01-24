import React, { useState } from 'react';
import { Layout } from '@/containers/Layout/Layout';
import { Section } from '@/containers/Section/Section';
import { Button } from '@/components/Action/Action';
import { Trigger } from '@/containers/Modal/Modal';
import { RegisterForm } from '@/screens/RegisterForm/RegisterForm';
import { LoginForm } from '@/screens/LoginForm/LoginForm';
import { Typography } from '@/components/Typography/Typography';

type MainPageProps = {
	data: { message: string };
};

export function MainPage({ data }: MainPageProps) {
	return (
		<Layout>
			<Section>
				{data ? (
					<Typography variant="title">Message: {data.message}</Typography>
				) : (
					<Typography variant="title">No data</Typography>
				)}

				<Trigger modalContent={<LoginForm />}>
					<Button variant="link">Sign In</Button>
				</Trigger>

				<Trigger modalContent={<RegisterForm />}>
					<Button variant="link">Sign Up</Button>
				</Trigger>
			</Section>
		</Layout>
	);
}
