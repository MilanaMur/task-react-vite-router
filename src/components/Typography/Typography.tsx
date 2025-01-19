import clsx from 'clsx';
import styles from './Typography.module.scss';
import React from 'react';
import { TypographyProps, TypographyVariants } from './types';

const withTypography = (defaults: TypographyProps) => {
	return function Typography(props: TypographyProps) {
		let { className, children, variant, Tag, ...rest } = {
			...defaults,
			...props,
		};
		Tag = Tag || 'span';
		variant = variant || TypographyVariants.normal;

		return (
			<Tag
				{...rest}
				className={clsx(styles.container, className, styles[variant])}
			>
				{children}
			</Tag>
		);
	};
};

export const Typography: React.FC<TypographyProps> = withTypography({});
