import clsx from 'clsx';
import styles from './Menu.module.scss';
import { ReactNode } from 'react';
import { Anchor } from '@/components/Anchor/Anchor';

export type MenuLink = {
	label: string | ReactNode;
	href: string;
};

export type MenuProps = {
	links: MenuLink[];
	className?: string;
};

export function Menu({ links, className }: MenuProps) {
	return (
		<ul className={clsx(styles.container, className)}>
			{links.map((link, index) => (
				<li key={index}>
					<Anchor href={link.href}>
						<span>{link.label}</span>
					</Anchor>
				</li>
			))}
		</ul>
	);
}
