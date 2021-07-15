import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ICategorySelected = {
   selected: boolean;
 }
 
export const ContainerItem = styled.TouchableOpacity<ICategorySelected>`
  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;

  border-radius: 12px;
  margin-bottom: 8px;
  margin-right: 8px;
  
  background-color: ${({ theme, selected }) => selected ? theme.colors.primaryLight : theme.card.backgroundDefault};
`;

export const BackgroundButton = styled.View<ICategorySelected>`
  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;

  padding: 4.5px 4.5px;
  border-radius: 12px;
  border-width: 1px;
  margin: 0;
  
  border-color: ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.backgroundFilterItem};
`;

export const TitleItem = styled.Text<ICategorySelected>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-weight: 500;
  font-style: normal;

  text-transform: capitalize;
  color: ${({ theme, selected }) => !selected ? theme.colors.textCard : theme.colors.primary};

  line-height: 25px;
 `;