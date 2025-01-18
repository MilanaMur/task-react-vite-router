import { ReactNode } from 'react';
import { HeaderProps } from '@/stories/Header';
import { FooterProps } from './Footer/Footer';

export type CardProps = {
    className?: string;
	children?: ReactNode;
    headerSettings?: HeaderProps;
    footerSettings?: FooterProps;
};