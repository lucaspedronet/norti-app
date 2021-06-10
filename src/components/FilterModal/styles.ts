import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

interface ICategoryState {
  id: number;
  title: string;
  selected: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: ${RFValue(775)}px;

  margin: 50px 0 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(64)}px;
  
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const MaskBackground = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
  padding-left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const IconClose = styled(MaterialIcons)`
  padding: 10px;

  font-size: ${RFValue(25)}px;
`;

export const TitleModal = styled.Text.attrs({ numberOfLines: 1 })`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;

  line-height: 25px;
`;

export const SessionCategory = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const BoxCategory = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;

  padding: 0 18px;
`;

export const ByBusinessActivity = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: auto;

  padding: 0 18px;
`;

export const TitleCategory = styled.Text.attrs({ numberOfLines: 1 })`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;

  line-height: 25px;
  margin-bottom: 16px;
  margin-left: 22px;
`;

export const ListCategory = styled(
  FlatList as new () => FlatList<ICategoryState>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginVertical: 0,
    marginHorizontal: 0,
    paddingHorizontal: 16,
  },
})`
  margin: 0px;
  padding: 0px;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${RFValue(82)}px;

  border-top-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.shadowsCard};
  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;