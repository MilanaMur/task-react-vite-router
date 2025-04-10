import clsx from 'clsx';
import styles from './Action.module.scss';
import { ReactNode } from 'react';
import { ActionTag, ButtonType, ButtonVariant } from './types';
import { Anchor } from '../Anchor/Anchor';

export type ButtonProps = {
	type?: ButtonType | keyof typeof ButtonType;
	variant?: ButtonVariant | keyof typeof ButtonVariant;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	href?: string;
	name?: string;
	Tag?: ActionTag;
};

export const withAction = (defaults: ButtonProps) => {
	return function Action(props: ButtonProps) {
		let { className, children, disabled, type, href, variant, Tag, ...rest } = {
			...defaults,
			...props,
		};
		Tag = Tag || 'button';
		variant = variant || 'primary';
		const TagElement = Tag === 'a' ? Anchor : Tag;

		return (
			<TagElement
				{...rest}
				type={Tag === 'button' ? type : undefined}
				href={Tag === 'a' ? href : undefined}
				disabled={disabled}
				className={clsx(styles.button, className, styles[variant])}
			>
				{children}
			</TagElement>
		);
	};
};

export const Action = withAction({});

export const Button = withAction({
	Tag: 'button',
	variant: 'primary'
});

export const Link = withAction({
	Tag: 'a',
	variant: 'link'
});

export const Submit = withAction({
	Tag: 'button',
	type: 'submit',
	variant: 'primary'
});
