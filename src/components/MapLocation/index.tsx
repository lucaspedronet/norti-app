import React from 'react';
import { StyleSheet, Linking, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { Container } from './styles';

interface MapLocationToMerchantProps {
   longitude?: number;
   latitude?: number;
 }

const MapLocation = ({ longitude = -48.3959475, latitude = -10.7244051 }: MapLocationToMerchantProps) => {
   const { OS } = Platform;
   const mapURL =
     OS === 'ios'
       ? `http://maps.apple.com/?ll=${latitude},${longitude}`
       : `geo:${latitude},${longitude}`;
   
  const openLink = () => {
     Linking.openURL(mapURL);
  };

  return (
     <Container>
        <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           region={{
              latitude,
              longitude,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0421,
           }}
           mapType="standard"
         />

     </Container>
  );
}

export { MapLocation };

const styles = StyleSheet.create({
   map: {
     flex: 1,
     margin: 0,
     padding: 0,
     backgroundColor: '#fff',
     ...StyleSheet.absoluteFillObject,
   },
   CardLocationMerchant: {
     flexDirection: 'row',
     elevation: 10,
     backgroundColor: '#fff',
     borderRadius: 8,
     marginHorizontal: 10,
     shadowColor: '#000',
     shadowRadius: 5,
     shadowOpacity: 0.3,
     shadowOffset: { width: 2, height: -2 },
     height: 80,
     width: '80%',
     overflow: 'hidden',
   },
 });
 