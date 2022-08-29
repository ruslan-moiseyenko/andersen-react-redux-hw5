import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal');


export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();

    }
  };

  return createPortal(
    <div className={ styles.backdrop } >
      <button onClick={ handleClick } className={ styles.closeButton }>X</button>
      <div className={ styles.content }>{ children }</div>

    </div>,
    modalRoot
  );
}