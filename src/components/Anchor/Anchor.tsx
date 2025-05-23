import clsx from 'clsx';
import styles from './Anchor.module.scss';
import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useAnchor, useLinkProps } from './hooks';

export type LinkValue =
	| string
	| ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'link'
> & { link?: LinkValue };

export function Anchor({ href, children, ...props }: AnchorProps) {
	const LinkElement = useAnchor(href);
	const propsLink = useLinkProps(href);

	return (
		<LinkElement {...props} {...propsLink} className={clsx(styles.link)}>
			{children}
		</LinkElement>
	);
}
