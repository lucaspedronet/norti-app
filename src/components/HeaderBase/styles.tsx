import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  
  width: 100%;
  height: ${RFPercentage(10)}px;
  
  background-color: ${({ theme }) => theme.card.backgroundDefault};
`;

export const HeaderIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: #000;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs + 2)}px;

  line-height: ${RFValue(21.6)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.neutralColors.dark['dark-dark']};
`;

export const BoxLeft = styled.View`
  flex: 3;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const BoxCenter = styled.View`
  flex: 10;
  height: 100%;
  justify-content: center;
`;

export const BoxRight = styled.View`
  flex: 3;
  height: 100%;
`;

export const ButtonGoBack = styled(BorderlessButton)`  
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
