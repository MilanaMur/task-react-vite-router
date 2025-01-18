import { FunctionComponent, createContext } from 'react';
import { AnchorProps } from './Anchor';

export type AnchorContextType = {
	LinkElement?: FunctionComponent<AnchorProps>;
	ignoreFn?: (href: string) => boolean;
};

export const AnchorContext = createContext<AnchorContextType>({});
