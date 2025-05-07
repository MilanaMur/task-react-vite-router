import React, { FunctionComponent } from 'react';
import { AnchorProps } from './Anchor';
import { AnchorContext, AnchorContextType } from './AnchorContext.tsx';

export type LinkTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a'>
	| FunctionComponent<AnchorProps>;

export type AnchorProviderProps = AnchorContextType & {
	children: React.ReactNode;
};

export function AnchorProvider({
	children,
	LinkElement,
	ignoreFn,
}: AnchorProviderProps) {
	return (
		<AnchorContext.Provider value={{ LinkElement, ignoreFn }}>
			{children}
		</AnchorContext.Provider>
	);
}
