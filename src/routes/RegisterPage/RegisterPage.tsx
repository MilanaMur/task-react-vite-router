import { FormProps } from '../../containers/Form/Form';

export type RegisterPageProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};
