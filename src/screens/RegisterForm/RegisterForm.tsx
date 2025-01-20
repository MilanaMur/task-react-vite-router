import clsx from 'clsx';
import styles from './RegisterForm.module.scss';
import { Form, FormProps } from '../../containers/Form/Form';
import { Typography } from '@/components/Typography/Typography';
import { Field } from '@/containers/Field/Field';
import { InputEmail, InputPassword, InputText } from '@/components/Input/Input';
import { Button } from '@/components/Action/Action';

export type RegisterFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};

export function RegisterForm({ className, formSettings }: RegisterFormProps) {
	return (
		<Form
			{...formSettings}
			method="post"
			className={clsx(styles.container, className)}
		>
			<Typography>Регистрация</Typography>
			<Field>
				<InputText name="name" placeholder="Имя" />
			</Field>
			<Field>
				<InputEmail name="email" placeholder="email@example.com" />
			</Field>
			<Field>
				<InputPassword name="password" placeholder="Пароль" />
			</Field>
			<Field>
				<InputPassword placeholder="Повторите пароль" />
			</Field>
			<Button type="submit" name="singup">
				Зарегистрироваться
			</Button>
		</Form>
	);
}
