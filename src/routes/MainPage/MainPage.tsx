import { FormProps } from '../../containers/Form/Form';

export type MainPageProps = {
	data: {
		result: string;
	};
    className?: string;
    formSettings?: Omit<FormProps, 'children'>
};
