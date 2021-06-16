import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label, Icon } from './styles';

interface ButtonRowSelectedProps extends TouchableOpacityProps {
   onPress(): void;
   selected: boolean;
   children: string;
};

const ButtonRowSelected: React.FC<ButtonRowSelectedProps> = ({ children, selected, onPress }: ButtonRowSelectedProps): JSX.Element => {
  return (
   <Container onPress={onPress}>
     {/* <Icon /> */}
     <Label>{children}</Label>
     <Icon name={selected ? "check-square" : "square"} selected={selected} />
   </Container>
  );
}

export  { ButtonRowSelected } ;