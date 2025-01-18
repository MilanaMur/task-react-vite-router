import { FormProps } from '../../containers/Form/Form';

export type RegisterFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};
