import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TeamProps } from './index';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.card.backgroundDefault};
`;

export const StoreInfo = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${RFValue(33)}px 0;
`;

export const StoreAvatar = styled.Image`
  height: ${RFValue(104)}px;
  width: ${RFValue(104)}px;

  border-radius: ${({ theme }) => theme.card.borderRadiusSmall}px;
  margin-bottom: 16px;
`;

export const StoreName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.md)}px;

  line-height: ${RFValue(24)}px;
  font-style: normal;
  text-align: center;

  color: #3D3D4A;
`;

export const StoreLocation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-top: ${RFValue(8)}px;
`;

export const Icon = styled(Ionicons)`
  margin: 0 10px;

  font-size: 16px;
  color: rgba(114, 114, 133, 1);
`;

export const LocationText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 500;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(16.8)}px;
  font-style: normal;
  text-align: center;

  color: rgba(114, 114, 133, 1);
`;

export const StoreNumberContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: ${RFValue(103)}px;

  border-top-left-radius: ${({ theme }) => theme.card.borderRadius * 2}px;
  border-top-right-radius: ${({ theme }) => theme.card.borderRadius * 2}px;

  padding: ${RFValue(20)}px ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NumberServiceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.md - 2)}px;

  line-height: ${RFValue(21.8)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;

export const NumberFavoriteText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.md - 2)}px;

  line-height: ${RFValue(21.8)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;

export const NumberAttendanceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.md - 2)}px;

  line-height: ${RFValue(21.8)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;

export const NumberServiceTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 500;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(16.8)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.white + '80'};
`;

export const NumberAttendanceTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 500;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(16.8)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.white + '80'};
`;

export const NumberFavoriteTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 500;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(16.8)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.colors.white + '80'};
`;


export const StoreContentContainer = styled.View`
  flex: 1;
  width: 100%;
  
  position: relative;
  top: -20px;
  
  border-top-left-radius: ${({ theme }) => theme.card.borderRadius * 2}px;
  border-top-right-radius: ${({ theme }) => theme.card.borderRadius * 2}px;

  padding: ${({ theme }) => theme.card.paddingDefault}px ${({ theme }) => theme.card.paddingDefault}px;
  background-color: ${({ theme }) => theme.card.backgroundDefault};
`;

export const StoreHelloWorldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xs)}px;

  line-height: ${RFValue(19.2)}px;
  font-style: normal;
  text-align: left;

  margin-bottom: 8px;

  color: #3D3D4A;
`;

export const StoreDescriptionText = styled.Text.attrs({ numberOfLines: 7 })`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(21)}px;
  font-style: normal;
  text-align: justify;

  color: #3D3D4A;
`;

export const StoreTeam = styled.View`
  padding: 0;
  margin-top: ${RFValue(32)}px;
`;

export const TeamTitle = styled.Text`

font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xs)}px;

  line-height: ${RFValue(19.2)}px;
  font-style: normal;
  text-align: left;

  margin-bottom: 8px;

  color: #3D3D4A;
`;

export const TeamList = styled(
  FlatList as new () => FlatList<TeamProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 0, paddingVertical: 0 },
})`
  flex: 1;
  margin: 20px 0;
  padding: 0px;
  background-color: ${({ theme }) => theme.card.backgroundDefault};
`;

export const TeamItem = styled.View`
  width: ${RFValue(64)}px;
  height: ${RFValue(100)}px;

  margin: 0 16px;
  padding: 0;
`;

export const TeamAvatar = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  border-radius: ${({ theme }) => theme.card.borderRadius}px;
`;

export const TeamName = styled.Text.attrs({ numberOfLines: 2 })`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(14.4)}px;
  font-style: normal;
  margin-top: 8px;
  text-align: center;

  color: #3D3D4A;
  `;


export const SocialContactStore = styled.View`
  width: 100%;
  padding: 0;

  margin-top: ${RFValue(32)}px;

  min-height: ${RFValue(147)}px;
`;

export const TitleContactStore = styled.Text.attrs({ numberOfLines: 1 })`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xs)}px;

  line-height: ${RFValue(19.2)}px;
  font-style: normal;
  margin-top: 8px;
  text-align: left;

  margin: 0;

  color: #3D3D4A;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  width:  100%;
  margin-top: ${RFValue(20)}px;
`;

export const ContactItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${RFValue(160)}px;
  height: ${RFValue(48)}px;

  margin-bottom: 12px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.card.borderColorDefault};
  border-radius: ${({ theme }) => theme.card.borderRadiusLarge}px;
`;

export const ContactNameText = styled.Text.attrs({ numberOfLines: 1 })`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: 500;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(15.4)}px;
  font-style: normal;
  margin-left: 8px;
  text-align: left;

  color: ${({ theme }) => theme.colors.textCard};
`;
