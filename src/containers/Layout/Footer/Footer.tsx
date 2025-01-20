import clsx from 'clsx';
import styles from './Footer.module.scss';
import { ReactElement } from 'react';

export type FooterProps = {
	className?: string;
	logo?: ReactElement;
	menu?: ReactElement;
};

export function Footer({ className, menu }: FooterProps) {
	return (
		<footer className={clsx(styles.container, className)}>
			<Logo href="../../../../public/favicon.svg" />
			<Menu
				name="menu"
				links={menu.map((element) => ({
					link: element.href,
					label: element.label,
				}))}
			/>
		</footer>
	);
}
