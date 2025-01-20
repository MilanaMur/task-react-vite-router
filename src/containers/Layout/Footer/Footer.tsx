import clsx from 'clsx';
import styles from './Footer.module.scss';
import { ReactElement } from 'react';
import { Logo } from '@/containers/Logo/Logo';
import { Menu } from '@/containers/Menu/Menu';

export type FooterProps = {
	className?: string;
	logo?: ReactElement;
};

export function Footer({ className }: FooterProps) {
	return (
		<footer className={clsx(styles.container, className)}>
			<Logo href="../../../../public/favicon.svg" />
			<Menu links={[{ label: '', href: '' }]} />
		</footer>
	);
}
