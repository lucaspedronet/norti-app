import React from 'react';
import { Linking, Platform } from 'react-native';

import { MapLocation } from '../MapLocation';
import { ButtonBase } from '../ButtonBase';

import {
   Container,
   ContainerMap,
   ContainerAddressLocation,
   AddressText,
} from './styles';

interface MapLocationToMerchantProps {
   longitude?: number;
   latitude?: number;
 }

const MapLocationToStore = ({ longitude = -48.3959475, latitude = -10.7244051 }: MapLocationToMerchantProps) => {
   const { OS } = Platform;
   const mapURL =
     OS === 'ios'
       ? `http://maps.apple.com/?ll=${latitude},${longitude}`
       : `geo:${latitude},${longitude}`;
   
  const openLink = () => {
     console.log('ok');
     Linking.openURL(mapURL);
  };

  return (
     <Container>
      <ContainerMap>
         <MapLocation latitude={-10.7244051} longitude={-48.3959475} />
      </ContainerMap>

      <ContainerAddressLocation>
         <AddressText>
         R. Moisés Rodrigues, 1415 - Aeroporto, Porto Nacional - TO, 77500-000
         </AddressText>
         <ButtonBase onPress={openLink}>Ver no mapa</ButtonBase>
      </ContainerAddressLocation>
    </Container>
  );
}

export { MapLocationToStore };