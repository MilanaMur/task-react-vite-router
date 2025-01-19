import clsx from 'clsx';
import styles from './Input.module.scss';
import { InputHTMLAttributes } from 'react';

export type InputProps = {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
	return <input {...props} className={clsx(styles.container, className)} />;
}

export const InputText = (props: InputProps) => Input({ ...props });

export const InputEmail = (props: InputProps) => Input({ ...props });

export const InputPassword = (props: InputProps) => Input({ ...props });
