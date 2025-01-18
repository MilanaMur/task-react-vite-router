import { ReactNode } from 'react';
import { ActionTag, ButtonType, ButtonVariant } from './types';

export type ButtonProps = {
	type?: ButtonType | keyof typeof ButtonType;
	variant?: ButtonVariant | keyof typeof ButtonVariant;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	href?: string;
	name?: string;
	Tag?: ActionTag;
};
