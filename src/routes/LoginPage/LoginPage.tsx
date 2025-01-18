import { FormProps } from '../../containers/Form/Form';

export type LoginPageProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>
};