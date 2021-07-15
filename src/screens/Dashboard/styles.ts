import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 16px;

  padding-bottom: ${getBottomSpace()};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderCategory = styled.View`
  width: 100%;
  padding: 12px 6px;
  border-radius: 12px;
  margin: 12px 0;

  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const TitleCategory = styled.Text.attrs({ numberOfLines: 2 })`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;

  line-height: 26px;
  color: ${({ theme }) => theme.colors.title};
`;

export const TitleChart = styled.Text.attrs({ numberOfLines: 1 })`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;

  line-height: 16px;
  color: ${({ theme }) => theme.colors.textCard};
`;

export const CardChart =  styled.View`
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: auto;

  padding: 16px;
  margin-bottom: 16px;
  border-radius: 12px;
  elevation: 5;

  background-color: ${({ theme }) => theme.card.backgroundDefault};
`;
