import clsx from 'clsx';
import styles from './Section.module.scss';
import { ReactNode } from 'react';

export type SectionProps = {
	className?: string;
	children?: ReactNode;
};

export function Section({ className, children }: SectionProps) {
	return <div className={clsx(styles.container, className)}>{children}</div>;
}
