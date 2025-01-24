import clsx from 'clsx';
import styles from './LoginForm.module.scss';
import { Form, FormProps } from '../../containers/Form/Form';
import { Button } from '@/components/Action/Action';
import { InputEmail, InputPassword } from '../../components/Input/Input';
import { Field } from '@/containers/Field/Field';
import { Typography } from '@/components/Typography/Typography';
import { useState, ChangeEvent, FormEvent } from 'react';

export type LoginFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};

export function LoginForm({ className, formSettings }: LoginFormProps) {
	const [formData, setFormData] = useState({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('LoginForm submitted:', formData);
	};

	return (
		<Form
			{...formSettings}
			method="post"
			className={clsx(styles.container, className)}
			onSubmit={handleSubmit}
		>
			<Typography variant="title">Sign In</Typography>
			<Field label="Email">
				<InputEmail
					name="email"
					placeholder="email@example.com"
					onChange={handleChange}
				/>
			</Field>
			<Field label="Password">
				<InputPassword
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
			</Field>
			<Button type="submit" name="signin">
				Sign In
			</Button>
		</Form>
	);
}
