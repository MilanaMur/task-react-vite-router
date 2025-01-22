import clsx from 'clsx';
import styles from './LoginForm.module.scss';
import { Form, FormProps } from '../../containers/Form/Form';
import { Button } from '@/components/Action/Action';
import { InputEmail, InputPassword } from '../../components/Input/Input';
import { Field } from '@/containers/Field/Field';
import { Typography } from '@/components/Typography/Typography';
import { useState } from 'react';

export type LoginFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
	onSubmit: (email: string, password: string) => void;
};

export function LoginForm({
	className,
	formSettings,
	onSubmit,
}: LoginFormProps) {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		onSubmit(email, password);
	};

	return (
		<Form
			{...formSettings}
			method="post"
			className={clsx(styles.container, className)}
			onSubmit={(e) => handleSubmit(e)}
		>
			<Typography variant="title">Sign In</Typography>
			<Field label="Email">
				<InputEmail
					name="email"
					placeholder="email@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Field>
			<Field label="Password">
				<InputPassword
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Field>
			<Button type="submit" name="signin">
				Sign In
			</Button>
		</Form>
	);
}
