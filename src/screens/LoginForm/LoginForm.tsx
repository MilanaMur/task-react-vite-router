import { FormProps } from '../../containers/Form/Form';

export type LoginFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};
