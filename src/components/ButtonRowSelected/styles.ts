import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface IIconProps {
   selected: boolean;
}

export const Container = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: ${RFValue(24)}px;

   margin-bottom: 16px;
   padding: 0 24px;
`;

export const Icon = styled(Feather)<IIconProps>`
   font-size: 24px;
   color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.background };
`;

export const Label = styled.Text`
   font-size: 14px;
   font-family: ${({ theme }) => theme.fonts.regular};

   color: ${({ theme }) => theme.colors.textCard};
`;


