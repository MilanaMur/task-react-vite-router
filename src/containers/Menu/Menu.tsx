import clsx from 'clsx';
import styles from './Card.module.scss';
import { ReactNode } from 'react';

export type MenuLink = {
	label: string | ReactNode;
	href: string;
};
export type MenuProps = {
    links: MenuLink[];
    className?: string;
}
