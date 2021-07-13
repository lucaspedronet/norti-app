import React from 'react';

import { Container, TitleHeader, HeaderRight, ActionsButton, IconDashboard, IconFilter, AmountFilterText} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <TitleHeader>Norti</TitleHeader>
      <HeaderRight>
        <ActionsButton onPress={handlerNavigation}>
          <IconDashboard name="dashboard" />
        </ActionsButton>
        <ActionsButton onPress={() => setVisibleModal(true)}>
          <>
            <IconFilter name="filter" />
            {someFilter.filter(Boolean).length > 0 && <AmountFilterText>{someFilter.filter(Boolean).length}</AmountFilterText>}
          </>
        </ActionsButton>
      </HeaderRight>
    </Container>
  );
}

export { Header };