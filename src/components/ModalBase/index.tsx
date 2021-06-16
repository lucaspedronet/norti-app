import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { useModal } from '../../hooks/useModal';
import { Container } from './styles';

interface ModalBaseProps {
  children: ReactNode;
}

const ModalBase: React.FC<ModalBaseProps> = ({ children }) => {
  const {  isOpen, Close, showModal  } = useModal();
  console.log(isOpen, showModal, Close);

  return (
    <Container>{children}</Container>
  );
}

export { ModalBase } ;