import { Typography } from '@/components/Typography/Typography';
import { Card } from '@/containers/Card/Card';
import { Layout } from '@/containers/Layout/Layout';
import { Section } from '@/containers/Section/Section';
import { LoginForm } from '@/screens/LoginForm/LoginForm';

type LoginPageProps = {
	data: { message: string };
};

export function LoginPage({ data }: LoginPageProps) {
	return (
		<Layout>
			<Section>
				{data ? (
					<Typography variant="title">Message: {data.message}</Typography>
				) : (
					<Typography variant="title">No data</Typography>
				)}

				<Card>
					<LoginForm />
				</Card>
			</Section>
		</Layout>
	);
}
