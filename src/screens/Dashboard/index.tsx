import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { useBusiness } from '../../hooks/business';

import { BusinessCardRight } from '../../components/BusinessCardRight';
import { BusinessCardLeft } from '../../components/BusinessCardLeft';
import { ModalCategories } from '../../components/ModalCategories';

import AvatarTonolucro from '../../assets/tonolucro.png';
import AvatarAGRO365 from '../../assets/AGRO365.png';
import AvatarGo from '../../assets/go.png';
import AvatarLevez from '../../assets/levez.png';

import { 
  Container,
  Header,
  HeaderRight,
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

const listOfBusiness: IBusiness[] = [
  {
    id: 1,
    description: 'Não importa o tamanho da sua fome, o Tonolucro está aqui para te ajudar nesse momento de vazio.',
    name: 'Tonolucro Delivery',
    city: 'Palmas - TO',
    photoAvatar: AvatarTonolucro,
  },
  {
    id: 2,
    description: 'Somos a AGRO365, empresa de tecnologia para o setor de agrobusiness que desenvolve sistemas web e planilhas',
    name: 'AGRO 365',
    city: 'Araguaína - TO',
    photoAvatar: AvatarAGRO365,
  },
  {
    id: 3,
    description: 'Como é bom comprar, não é? Melhor ainda é não enfrentar fila, demora no atendimento e todo o translado até sua lo...',
    name: 'Go!',
    city: 'Araguaína - TO',
    photoAvatar: AvatarGo,
  },
  {
    id: 4,
    description: 'LEVEZ é uma plataforma inteligente de mobilidade para você e sua família. Funciona de forma simples e prática...',
    name: 'Levez',
    city: 'Araguaína - TO',
    photoAvatar: AvatarLevez,
  },
  {
    id: 5,
    description: 'Não importa o tamanho da sua fome, o Tonolucro está aqui para te ajudar nesse momento de vazio.',
    name: 'Tonolucro Delivery',
    city: 'Palmas - TO',
    photoAvatar: AvatarTonolucro,
  },
];

const Dashboard: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const { businessQuiz } = useBusiness();

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
            <ActionsButton>
              <IconDashboard name="dashboard" />
            </ActionsButton>
            <ActionsButton onPress={() => setVisibleModal(true)}>
              <IconFilter name="filter" />
            </ActionsButton>
          </HeaderRight>
        </Header>

        <ListOfBusiness 
          data={businessQuiz}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => {
            if (index %2 === 0) {
              return <BusinessCardRight business={item} />;
            }
            return <BusinessCardLeft business={item} />;
          }}
        />
      </Container>
    </>
  );
}

export { Dashboard };