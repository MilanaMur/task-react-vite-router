import { AnchorHTMLAttributes, MouseEvent } from 'react';

export type LinkValue =
	| string
	| ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'link'
> & { link?: LinkValue };
