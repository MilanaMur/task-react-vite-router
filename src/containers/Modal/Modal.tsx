import clsx from 'clsx';
import styles from './Modal.module.scss';
import { ReactNode, ReactElement, useState, useRef, useEffect } from 'react';

export type ModalProps = {
	className?: string;
	children?: ReactNode;
	onClose: () => void;
};

export function Modal({ className, children, onClose }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && onClose) {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [onClose]);

	return (
		<div ref={modalRef} className={clsx(styles.modal, className)}>
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
	modalContent?: ReactElement;
};

export function Trigger({ children, modalContent }: TriggerProps) {
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
			{isModalOpen && <Modal onClose={handleCloseModal}>{modalContent}</Modal>}
		</>
	);
}
