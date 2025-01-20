import clsx from 'clsx';
import styles from './Header.module.scss';
import { ReactNode } from 'react';
import { Logo } from '@/containers/Logo/Logo';
import { Menu } from '@/containers/Menu/Menu';

export type HeaderProps = {
	className?: string;
	children?: ReactNode;
};

export function Header({ className, children }: HeaderProps) {
	return (
		<header className={clsx(styles.container, className)}>
			<Logo href="../../../../public/favicon.svg" />
			<Menu links={[{ label: 'Главная', href: '/' }]} />
			{children}
		</header>
	);
}
