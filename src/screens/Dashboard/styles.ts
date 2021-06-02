import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize'
export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;

  padding: 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  justify-content: flex-end;

  width: 100%;
  height: ${RFPercentage(16)}px;

  padding: 0 29px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const TitleHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.titleHeader};

  line-height: 44px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};

  line-height: 20px;
  padding: 27px 25px;
`;

export const ListOfBusiness = styled.FlatList.attrs({

})`

`;


export const BusinessContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;

  width: 295px;
  height: 144px;

  margin: 0 20px 20px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.backgroundCard};

`

export const Left = styled.View`
  justify-content: space-between;
  width: 166px;



  margin: 21px 0 16px 24px;
  padding: 0;

`

export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.titleHeader};

  line-height: 16px;
`

export const BusinessName = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
font-size: 16px;
color: ${({ theme }) => theme.colors.titleHeader};

line-height: 21px;
`

export const BusinessBio = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};

  line-height: 16px;
`

export const BusinessAvatar = styled.View``
