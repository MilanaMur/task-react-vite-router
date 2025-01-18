import { ReactNode, ReactElement } from 'react';

export type ModalProps = {
	className?: string;
	children?: ReactNode;
	onClose?: () => void;
};

export type TriggerProps = {
	children?: ReactElement;
	modal?: ReactElement;
};
