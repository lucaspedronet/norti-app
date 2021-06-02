import React from 'react';
import AvatarTonolucro from '../../assets/tonolucro.svg';

import { 
  Container,
  Header,
  TitleHeader,
  Title,
  ListOfBusiness,
  BusinessContainer,
  Left,
  City,
  BusinessName,
  BusinessBio,
  BusinessAvatar
} from './styles';

interface IBusiness {
  id: number;
  bio: string;
  name: string;
  city: string;
  img: string;
}

const listOfBusiness: IBusiness[] = [
  {
    id: 1,
    bio: 'Não importa o tamanho da sua fome, o Tonolucro está aqui para te ajudar nesse momento de vazio.',
    name: 'Tonolucro Delivery',
    city: 'Palmas - TO',
    img: AvatarTonolucro,
  },
  {
    id: 2,
    bio: 'Não importa o tamanho da sua fome, o Tonolucro está aqui para te ajudar nesse momento de vazio.',
    name: 'Tonolucro Delivery',
    city: 'Palmas - TO',
    img: AvatarTonolucro,
  },
]
const Dashboard: React.FC = () => {
  return(
    <Container>
      <Header>
        <TitleHeader>Norti</TitleHeader>
      </Header>

      <Title>Empresas entrevisatadas</Title>

      <ListOfBusiness 
        data={listOfBusiness}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <BusinessContainer>
            <Left>
              <City>{item.city}</City>
              <BusinessName>{item.name}</BusinessName>
              <BusinessBio>{item.bio}</BusinessBio>
            </Left>
            <BusinessAvatar src={item.img}/>
          </BusinessContainer>

        )}
      />
    </Container>
  );
}

export { Dashboard };