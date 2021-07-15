import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

type ICategorySelected = {
   selected: boolean;
 }
 
export const BackgroundButton = styled.View<ICategorySelected>`
  align-items: center;
  justify-content: center;

  width: ${RFValue(157)}px;
  height: ${RFValue(48)}px;

  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.backgroundFilterItem};
`;

export const ContainerItem = styled.TouchableOpacity<ICategorySelected>`
  align-items: center;
  justify-content: center;

  width: ${RFValue(157)}px;
  height: ${RFValue(48)}px;

  border-radius: 12px;
  margin-bottom: 12px;
  
  background-color: ${({ theme, selected }) => selected ? theme.colors.primaryLight : theme.card.backgroundDefault};
`;

export const TitleItem = styled.Text<ICategorySelected>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  font-style: normal;

  text-transform: capitalize;
  color: ${({ theme, selected }) => !selected ? theme.colors.textCard : theme.colors.primary};

  line-height: 25px;
 `;