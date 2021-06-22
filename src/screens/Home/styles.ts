import styled from 'styled-components/native';
import { FlatList} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { IBusinessQuiz } from '../../hooks/business';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;

  padding: 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: ${RFPercentage(16)}px;

  padding: 16px 29px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const TitleHeader = styled.Text.attrs({
  android_hyphenationFrequency: "high",
  disabled: true,
  textBreakStrategy: "balanced",
})`
  max-height: 45px;
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.titleHeader};
`;

export const HeaderRight = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  padding: 0;
  margin: 0;
`;

export const ActionsButton = styled(BorderlessButton)`
  margin: 0;
  padding: 0 15px;
`;

export const IconFilter = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.titleHeader};
  font-size: ${RFValue(25)}px;
`;

export const IconDashboard = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.titleHeader};
  font-size: ${RFValue(25)}px;
`;

export const BackgroundItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const ListOfBusiness = styled(
  FlatList as new () => FlatList<IBusinessQuiz>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 20, paddingHorizontal: 24 },
})`
  flex: 1;
  margin: 0px;
  padding: 0px;
`;


export const BusinessContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;

  width: 295px;
  height: 144px;
  padding: 21px 0 16px 24px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const BusinessHeader = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 166px;

  padding: 0;
`;

export const AmountFilterText = styled.Text`
  position: absolute;
  right: 30px;
  bottom: 15px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.backgroundCard};
  text-align: center;

  width: 15px;
  height: 15px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.danger};
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

export const BusinessBio = styled.Text.attrs({ numberOfLines: 4 })`
  max-width: 160px;
  
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
  right: 0;
`;
