import clsx from 'clsx';
import styles from './Logo.module.scss';

export type LogoProps = {
	className?: string;
	href?: string;
};

export function Logo({ className, href }) {
	return <img className={clsx(styles.logo, className)} src={href} />;
}
