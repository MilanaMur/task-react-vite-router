import { AnchorHTMLAttributes, useContext } from 'react';
import { convertURL } from '@/utils';
import { LinkValue } from './Anchor';
import { LinkTag } from './AnchorProvider';
import { AnchorContext } from './AnchorContext';

export function useAnchor(link?: LinkValue): LinkTag {
	const { LinkElement, ignoreFn } = useContext(AnchorContext);
	if (link && LinkElement && typeof link === 'string') {
		if (!ignoreFn || ignoreFn(link)) return LinkElement;
	}
	return 'a';
}

export function useLinkProps(
	link?: LinkValue
): AnchorHTMLAttributes<HTMLAnchorElement> {
	const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};

	if (typeof link === 'string') {
		const url = convertURL(link);
		props.href = link;
		if (url.origin !== location.origin) {
			props.rel = 'noopener noreferrer';
			props.target = '_blank';
		}
	}

	if (typeof link === 'function') {
		props.onClick = (e) => {
			e.preventDefault();
			e.stopPropagation();
			link(e);
		};
	}

	return props;
}
