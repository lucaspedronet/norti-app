import React, { useState, useEffect } from 'react';
import { ImageProps, Linking, View } from 'react-native';

import { HeaderBase } from '../../components/HeaderBase';
import { MapLocationToStore } from '../../components/MapLocationToStore'

import Avatar_1 from '../../assets/avatar-01.png'
import Avatar_2 from '../../assets/avatar-02.png'
import Avatar_3 from '../../assets/avatar-03.png'
import Avatar_4 from '../../assets/avatar-04.png'

import { IconsContact } from '../../utils/constants/iconsTab';

import { 
   Container,
   StoreInfo,
   StoreAvatar,
   StoreName,
   StoreLocation,
   Icon,
   LocationText,

   StoreNumberContainer,
   NumberServiceText,
   NumberFavoriteText,
   NumberServiceTitle,
   NumberAttendanceText,
   NumberAttendanceTitle,
   NumberFavoriteTitle,

   StoreContentContainer,
   StoreHelloWorldText,
   StoreDescriptionText,

   StoreTeam,
   TeamTitle,
   TeamList,

   TeamItem,
   TeamAvatar,
   TeamName,

   SocialContactStore,
   TitleContactStore,
   ContactContainer,
   ContactItem,
   ContactNameText,
} from './styles';

export type TeamProps = {
   id: number;
   avatar: ImageProps;
   name: string;
 }

const ProfileStore = ({ route }) => {
   const { business } = route.params;
   console.log(business);
   
   const { instagram, facebook, phone, website, longitude, latitude } = business;
   
   const openLink = (title: string) => {
      switch(title) {
         case 'Facebook': {
            if (facebook.length <= 0) return;
               Linking.openURL(`https://www.facebook.com/${facebook}`).catch(() => {
                  Linking.openURL(`https://www.facebook.com/${facebook}`);
               });
            break;
         };
         case 'Instagram': {
            if (instagram.length <= 0) return;
               Linking.openURL(`https://www.instagram.com/${instagram}`).catch(() => {
                  Linking.openURL(`https://www.instagram.com/${instagram}`);
               });
            break;
         };
         case 'Ligar': {
            if (phone.length <= 0) return;
            Linking.openURL(`tel:${phone}`).catch(() => {
               Linking.openURL(`tel:${phone}`);
            });
            break;
         };
         default: {
            if (website.length <= 0) return;
            Linking.openURL(`https://${website}`).catch(() => {
               Linking.openURL(`https://${website}`);
            });
            break;
         }

      }
   };

  return (
     <Container>
        <HeaderBase title="Perfil" icon />
        <StoreInfo>
           <StoreAvatar source={business.photoAvatar} />
           <StoreName>{business.businessCategory.name}</StoreName>
           <StoreLocation>
              <Icon name="location-outline" />
              <LocationText>{business.businessCategory.city}</LocationText>
           </StoreLocation>
        </StoreInfo>

        <StoreContentContainer>

           <StoreHelloWorldText>Bem vindo, Cliente! 👊🏼</StoreHelloWorldText>
           <StoreDescriptionText>
              {business.description}
           </StoreDescriptionText>
            
            <TeamTitle>Localização</TeamTitle>
            <MapLocationToStore longitude={longitude} latitude={latitude} />

            <SocialContactStore>
               <TitleContactStore>Precisa falar com a gente?</TitleContactStore>
               <ContactContainer>
                  {IconsContact.map((icon) => {
                     const { IconContact, name, title, size, color } = icon;
                     return (
                        <ContactItem key={title} onPress={() => openLink(title)}>
                           <IconContact name={name} size={size} color={color} />
                           <ContactNameText>{title}</ContactNameText>
                        </ContactItem>
                     );
                  })}
               </ContactContainer>
            </SocialContactStore>
        </StoreContentContainer>

     </Container>
  );
}

export { ProfileStore } ;