import React from 'react';

import { Container, Title } from './styles';

interface IButtonViewFilterProps {
  children: string;
}
const ButtonViewFilter: React.FC<IButtonViewFilterProps> = ({ children }: IButtonViewFilterProps) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}

export { ButtonViewFilter };