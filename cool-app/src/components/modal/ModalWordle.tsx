import React, { ReactNode, FunctionComponent } from 'react';
import ReactModal from 'react-modal';
import Wordle from "../game/wordle/Wordle";

import './ModalWordle.css';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  // children: ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <Wordle />
    </ReactModal>
  );
};

export default Modal;