import { ReactNode } from 'react';
import { HeaderProps } from './Header/Header';
import { FooterProps } from './Footer/Footer';

export type LayoutProps = {
	className?: string;
	children?: ReactNode;
	headerSettings?: HeaderProps;
	footerSettings?: FooterProps;
};
