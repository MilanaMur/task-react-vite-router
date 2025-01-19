import clsx from 'clsx';
import styles from './RegisterForm.module.scss';
import { FormProps } from '../../containers/Form/Form';
import { Title } from '@/ui';

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
			<Title>Зарегистрироваься</Title>
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
		</Form>
	);
}
