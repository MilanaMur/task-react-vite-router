import { InputHTMLAttributes } from 'react';

export type InputProps = {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;
