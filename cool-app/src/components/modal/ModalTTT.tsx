import React, { ReactNode, FunctionComponent } from 'react';
import ReactModal from 'react-modal';
import Game from "../game/tictactoe/Game";

import './ModalTTT.css';

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
      <Game />
    </ReactModal>
  );
};

export default Modal;