import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface IButtonViewFilterProps {
  children: string;
  onPress(): void;
}
const ButtonViewFilter: React.FC<IButtonViewFilterProps> = ({ children, onPress }: IButtonViewFilterProps) => {
  console.log(onPress)
  return (
    <Container onPress={onPress}>
      <Title>{children}</Title>
    </Container>
  );
}

export { ButtonViewFilter };