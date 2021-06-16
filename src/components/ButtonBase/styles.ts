import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ButtonProps = {
   isButton: "primary" | "secondary";
}

type TitleButtonProps = {
   isTitle: "primary" | "secondary";
}

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.4 })<ButtonProps>`
   align-items: center;
   justify-content: center;

   width: 100%;
   height: ${RFValue(44)}px;

   border-radius: ${RFValue(12)}px;
   border-width: ${RFValue(0.5)}px;
   border-color: ${({ theme, isButton }) => isButton === "secondary" ? theme.colors.primary : theme.colors.primaryLight};

   background-color: ${({ theme, isButton }) => isButton === "primary" ? theme.colors.primary : theme.colors.primaryLight};
`;

export const TitleButton = styled.Text<TitleButtonProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;

  line-height: 25px;
  color: ${({ theme, isTitle }) => isTitle === "primary" ? theme.colors.textButtonPrimary : theme.colors.primary};
`;