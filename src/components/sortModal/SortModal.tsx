import '../../common/event.scss';
import styles from './SortModal.module.scss';
import { useRef } from 'react';

const SortModal = () => {
    const modalRef = useRef<HTMLDivElement>(null);

    function onCloseModal() {
        if (modalRef.current) {
            modalRef.current.style.animation = 'closeModal .8s forwards';
        }
    }

    return (
        <div className={styles.sortModal} ref={modalRef}>
            <div onClick={onCloseModal}>close</div>
        </div>
    )
}

export default SortModal;