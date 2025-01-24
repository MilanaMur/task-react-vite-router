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
			<Logo />
			<Menu
				links={[
					{ label: 'Home', href: '/' },
					{ label: 'Sign In', href: '/login' },
					{ label: 'Sign Up', href: '/register' }
				]}
			/>
			{children}
		</header>
	);
}
