import clsx from 'clsx';
import styles from './RegisterForm.module.scss';
import { Form, FormProps } from '../../containers/Form/Form';
import { Typography } from '@/components/Typography/Typography';
import { Field } from '@/containers/Field/Field';
import { InputEmail, InputPassword, InputText } from '@/components/Input/Input';
import { Button } from '@/components/Action/Action';
import { useState } from 'react';

export type RegisterFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
	onSubmit: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => void;
};

export function RegisterForm({
	className,
	formSettings,
	onSubmit,
}: RegisterFormProps) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(name, email, password, confirmPassword);
	};

	return (
		<Form
			{...formSettings}
			method="post"
			className={clsx(styles.container, className)}
			onSubmit={(e) => handleSubmit(e)}
		>
			<Typography>Sign Up</Typography>
			<Field label="Name">
				<InputText
					name="name"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</Field>
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
			<Field label="Repeat password">
				<InputPassword
					placeholder="Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
			</Field>
			<Button type="submit" name="singup">
				Sign Up
			</Button>
		</Form>
	);
}
