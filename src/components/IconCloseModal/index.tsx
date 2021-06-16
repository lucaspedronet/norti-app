import React from 'react';

import { Container } from './styles';

type IconCloseModalProps = {
   nameIcon: string;
   onPress(): void;
}

const IconCloseModal: React.FC<IconCloseModalProps> = ({ nameIcon, onPress = () => {}, ...rest }) => {
  return <Container {...rest} name={nameIcon} onPress={onPress} />;
}

export { IconCloseModal } ;