import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  
  width: ${RFValue(327)}px;
  height: ${RFValue(56)}px;

  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};

  position: absolute;
  bottom: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  font-weight: 500;
  font-style: normal;

  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.titleButton};

  line-height: 20px;
`;