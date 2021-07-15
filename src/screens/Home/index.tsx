import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ImageSourcePropType } from 'react-native';
import { useBusiness } from '../../hooks/useBusiness';

import { BusinessCardRight } from '../../components/BusinessCardRight';
import { BusinessCardLeft } from '../../components/BusinessCardLeft';
import { ModalCategories } from '../../components/ModalCategories';

import { 
  Container,
  Header,
  HeaderRight,
  AmountFilterText,
  ActionsButton,
  TitleHeader,
  IconFilter,
  IconDashboard,
  ListOfBusiness,
} from './styles';

export interface IBusiness {
  id: number;
  description: string;
  name: string;
  city: string;
  photoAvatar: ImageSourcePropType;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const { businessQuiz, someFilter } = useBusiness();

  function navigationDashboard(): void {
    navigate("Dashboard", { data: 'Teste..'});
  }

  function navigationProfileStore(business: any): void {
    navigate("ProfileStore", { business });
  }

  return(
    <>
    {visibleModal && (
      <ModalCategories
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}
        onShow={() => setVisibleModal(true)}
        close={() => setVisibleModal(false)}
      />
    )}
      
      <Container>
        <Header>
          <TitleHeader>Norti</TitleHeader>
          <HeaderRight>
            <ActionsButton onPress={navigationDashboard}>
              <IconDashboard name="dashboard" />
            </ActionsButton>
            <ActionsButton onPress={() => setVisibleModal(true)}>
              <>
                <IconFilter name="filter" />
                {someFilter.filter(Boolean).length > 0 && <AmountFilterText>{someFilter.filter(Boolean).length}</AmountFilterText>}
              </>
            </ActionsButton>
          </HeaderRight>
        </Header>

        <ListOfBusiness 
          data={businessQuiz}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => {
            if (index %2 === 0) {
              return <BusinessCardRight business={item} onPress={() => navigationProfileStore(item)} />;
            }
            return <BusinessCardLeft business={item} onPress={() => navigationProfileStore(item)} />;
          }}
        />
      </Container>
    </>
  );
}

export { Home };