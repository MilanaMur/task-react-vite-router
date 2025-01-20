import clsx from 'clsx';
import styles from './LoginForm.module.scss';
import { Form, FormProps } from '../../containers/Form/Form';
import { Button } from '@/components/Action/Action';
import { InputEmail, InputPassword } from '../../components/Input/Input';
import { Field } from '@/containers/Field/Field';
import { Typography } from '@/components/Typography/Typography';

export type LoginFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};

export function LoginForm({ className, formSettings }: LoginFormProps) {
	return (
		<Form
			{...formSettings}
			method="post"
			className={clsx(styles.container, className)}
		>
			<Typography>Вход</Typography>
			<Field>
				<InputEmail name="email" placeholder="email@example.com" />
			</Field>
			<Field>
				<InputPassword name="password" placeholder="Пароль" />
			</Field>
			<Button type="submit" name="signin">
				Войти
			</Button>
		</Form>
	);
}
