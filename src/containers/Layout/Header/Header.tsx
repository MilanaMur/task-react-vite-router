import clsx from 'clsx';
import styles from './Header.module.scss';
import { ReactElement, ReactNode } from 'react';
import { Logo } from '@/containers/Logo/Logo';
import { Menu } from '@/containers/Menu/Menu';

export type HeaderProps = {
	className?: string;
	logo?: ReactElement;
	menu?: ReactElement;
	children?: ReactNode;
};

export function Header({ className, menu, children }: HeaderProps) {
	return (
		<header className={clsx(styles.container, className)}>
			<Logo href="../../../../public/favicon.svg" />
			<Menu
				name="menu"
				links={menu.map((element) => ({
					link: element.href,
					label: element.label,
				}))}
			/>
			{children}
		</header>
	);
}
