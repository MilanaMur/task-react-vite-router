import { Typography } from '@/components/Typography/Typography';
import { Card } from '@/containers/Card/Card';
import { Layout } from '@/containers/Layout/Layout';
import { Section } from '@/containers/Section/Section';
import { RegisterForm } from '@/screens/RegisterForm/RegisterForm';

type RegisterPageProps = {
	data: { message: string };
};

export function RegisterPage({ data }: RegisterPageProps) {
	return (
		<Layout>
			<Section>
				{data ? (
					<Typography variant="title">Message: {data.message}</Typography>
				) : (
					<Typography variant="title">No data</Typography>
				)}

				<Card>
					<RegisterForm />
				</Card>
			</Section>
		</Layout>
	);
}
