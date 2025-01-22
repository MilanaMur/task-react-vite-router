import clsx from 'clsx';
import styles from './Logo.module.scss';

export type LogoProps = {
	className?: string;
};

export function Logo({ className }: LogoProps) {
	return <img className={clsx(styles.logo, className)} src='src/containers/Logo/logo.png' />;
}
