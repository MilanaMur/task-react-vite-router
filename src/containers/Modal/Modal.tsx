import clsx from 'clsx';
import styles from './Modal.module.scss';
import { ReactNode, ReactElement, useState } from 'react';

export type ModalProps = {
	className?: string;
	children?: ReactNode;
	onClose?: () => void;
};

export function Modal({ className, children, onClose }: ModalProps) {
	return (
		<div className={clsx(styles.modal, className)}>
			<div className={clsx(styles.content)}>
				<button className={clsx(styles.close)} onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

export type TriggerProps = {
	children?: ReactElement;
	modal?: ReactElement;
};

export function Trigger({ children, modal }: TriggerProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{children && <div onClick={handleOpenModal}>{children}</div>}
			{isModalOpen && <Modal onClose={handleCloseModal}>{modal}</Modal>}
		</>
	);
}
