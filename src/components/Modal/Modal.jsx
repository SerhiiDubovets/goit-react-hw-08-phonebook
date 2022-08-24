import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BlokModal, Modals, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  const hendleModal = e => {
    if (e.code === 'Escape') {
      // console.log(e.code);
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', hendleModal);
    // window.removeEventListener('keydown', hendleModal);
  });

  const handleBackdrop = event => {
    // console.log(event.target);
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <BlokModal onClick={handleBackdrop}>
      <Modals>
        <CloseBtn type="button" onClick={onClose}>
          x
        </CloseBtn>
        {children}
      </Modals>
    </BlokModal>,
    modalRoot
  );
}
