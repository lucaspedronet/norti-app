import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, TitleButton } from './styles';

interface IButtonBaseProps extends TouchableOpacityProps {
   children: string;
   isButton: "primary" | "secondary";
}

const ButtonBase: React.FC<IButtonBaseProps> = ({ children, isButton = "primary", ...rest }: IButtonBaseProps) => {
  return (
   <Container {...rest} isButton={isButton}>
      <TitleButton isTitle={isButton}>{children}</TitleButton>
   </Container>
  );
}

export { ButtonBase };