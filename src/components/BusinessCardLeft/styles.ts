import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const BackgroundItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const BusinessContainer = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  
  width: ${RFValue(295)}px;
  height: 144px;
  padding: 21px 0 16px 24px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.card.backgroundDefault};
`;

export const BusinessHeader = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${RFValue(160)}px;
  margin-right: 30px;
  padding: 0;
`;

export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.titleHeader};

  line-height: 16px;
`;

export const BusinessName = styled.Text.attrs({ numberOfLines: 2 })`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.titleHeader};
  font-size: ${RFValue(16)}px;


  line-height: 21px;
`;

export const BusinessDescription = styled.Text.attrs({ numberOfLines: 4 })`
  width: ${RFValue(160)}px;
  margin-right: 30px;
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-style: normal;
  
  text-align: justify;
  letter-spacing: 0.5px;
  line-height: 16px;
  
  color: ${({ theme }) => theme.colors.text};
  
`;

export const BusinessAvatar = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;

  border-radius: 12px;
  position: absolute;
  left: 0;
`;
