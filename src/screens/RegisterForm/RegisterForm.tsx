import clsx from 'clsx';
import styles from './RegisterForm.module.scss';
import { Form, FormProps } from '../../containers/Form/Form';
import { Typography } from '@/components/Typography/Typography';
import { Field } from '@/containers/Field/Field';
import { InputEmail, InputPassword, InputText } from '@/components/Input/Input';
import { Button } from '@/components/Action/Action';
import { useState, ChangeEvent, FormEvent } from 'react';

export type RegisterFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};

export function RegisterForm({ className, formSettings }: RegisterFormProps) {
	const [formData, setFormData] = useState({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('RegisterForm submitted:', formData);
	};

	return (
		<Form
			{...formSettings}
			method="post"
			className={clsx(styles.container, className)}
			onSubmit={handleSubmit}
		>
			<Typography>Sign Up</Typography>
			<Field label="Name">
				<InputText name="name" placeholder="Name" onChange={handleChange} />
			</Field>
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
			<Field label="Repeat password">
				<InputPassword
					name="confirm-password"
					placeholder="Password"
					onChange={handleChange}
				/>
			</Field>
			<Button type="submit" name="singup">
				Sign Up
			</Button>
		</Form>
	);
}
