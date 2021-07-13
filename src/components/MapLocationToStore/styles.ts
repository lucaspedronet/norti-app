import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  min-height: ${RFValue(136)}px;
`;

export const ContainerMap = styled.View`
  height: ${RFValue(136)}px;
  border-radius: ${({ theme }) => theme.card.borderRadius}px;
  overflow: hidden;
  
  margin: ${RFValue(16)}px 0;
`;

export const ContainerAddressLocation = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AddressText = styled.Text.attrs({
  numberOfLines: 4,
})`
  width: ${RFValue(154)}px;
  flex: 1;
  margin-right: 12px;
  font-family: ${({ theme }) => theme.fonts.IBM_Regular};
  font-weight: 400;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxxs)}px;

  line-height: ${RFValue(18)}px;
  font-style: normal;
  text-align: left;

  color: ${({ theme }) => theme.neutralColors.dark['dark-light']};
`;