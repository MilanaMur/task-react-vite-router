import React, { FormHTMLAttributes, FunctionComponent } from 'react';

export type FormTag = 'form' | FunctionComponent;

export type FormProps = {
	className?: string;
	Tag?: FormTag;
	children?: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;
