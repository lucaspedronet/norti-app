import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IIcon {
  iconBk: boolean;
}

export const Container = styled.View`
  width: 100%;
  min-height: 50%;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const MaskBackground = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
  padding-left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${RFValue(16)}px ${RFValue(20)}px;
  background-color: transparent;

  width: 100%;
  min-height: ${RFValue(23)}px;
`;

export const Icon = styled(MaterialIcons)<IIcon>`
  padding: 10px;
  border-radius: 15px;

  font-size: ${RFValue(25)}px;
  background-color: ${({ theme, iconBk }) => iconBk ? theme.colors.primaryLight : "transparent" };
`;

export const IconCode = styled(FontAwesome)`
  padding: 10px;
  border-radius: 15px;

  font-size: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.titleHeader};
  margin: 0 36px;

  line-height: 23px;
`;

export const Body = styled.View`
  width: 100%;
  height: auto;

  padding: ${RFValue(12)}px ${RFValue(20)}px;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const CategoryFilter = styled.TouchableOpacity.attrs({ activeOpacity: 0.3 })`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryRow = styled.View`
  width: 100%;
  height: ${RFValue(0.5)}px;

  margin: 15px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({theme}) => theme.colors.textCard};
  background-color: ${({ theme }) => theme.colors.primaryLight};

  padding: 5px 10px;
  margin: 0 16px;
  border-radius: 4px;

  line-height: 23px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 150px;
  
  padding: ${RFValue(24)}px ${RFValue(20)}px;
`;