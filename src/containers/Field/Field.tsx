import clsx from 'clsx';
import styles from './Field.module.scss';
import { ReactNode } from 'react';

export type FieldProps = {
	className?: string;
	children?: ReactNode;
	label?: string;
};

export function Field({ className, children, label }: FieldProps) {
	return (
		<label className={clsx(styles.container, className)}>
			{label && <span className={clsx(styles.label)}>{label}</span>}
			{children}
		</label>
	);
}
