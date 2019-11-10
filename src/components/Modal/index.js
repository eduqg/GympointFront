import React from 'react';
import { Wrapper, ModalMain } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  return (
    <Wrapper display={show ? 'block' : 'none'}>
      <ModalMain>
        <button type="button" className="close" onClick={handleClose}>
          Fechar
        </button>
        {children}
      </ModalMain>
    </Wrapper>
  );
};
