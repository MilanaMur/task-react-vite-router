import { ReactElement, ReactNode } from 'react';
import { MenuLink } from '../types';

export type HeaderProps = {
	className?: string;
	logo?: ReactElement;
	menu?: MenuLink;
	children?: ReactNode;
};
