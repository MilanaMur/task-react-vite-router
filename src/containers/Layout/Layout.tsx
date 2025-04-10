import clsx from 'clsx';
import styles from './Layout.module.scss';
import { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export type LayoutProps = {
	className?: string;
	children?: ReactNode;
};

export function Layout({ className, children }: LayoutProps) {
	return (
		<div className={clsx(styles.container, className)}>
			<Header className={clsx(styles.header)} />
			<main className={clsx(styles.main)}>{children}</main>
			<Footer className={clsx(styles.footer)} />
		</div>
	);
}
