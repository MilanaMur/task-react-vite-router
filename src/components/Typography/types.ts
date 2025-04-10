import React, { HTMLAttributes } from 'react';

export type TextTag = keyof Pick<
	React.JSX.IntrinsicElements,
	'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export type TitleTag = keyof Pick<
	React.JSX.IntrinsicElements,
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export enum TypographyVariants {
	caption = 'caption',
	label = 'label',
	normal = 'normal',
	title = 'title'
}

export type TypographyProps<T = TextTag | TitleTag> = {
	className?: string;
	children?: React.ReactNode;
	variant?: TypographyVariants | keyof typeof TypographyVariants;
	Tag?: T;
} & HTMLAttributes<Element>;
