import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Feather)`
   padding: 0;
   margin: 0;

   font-size: ${RFValue(30)}px;
   color: #000000;
`;

