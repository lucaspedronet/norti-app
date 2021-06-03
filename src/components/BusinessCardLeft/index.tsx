import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { 
   BackgroundItem,
   BusinessContainer,
   BusinessHeader,
   City,
   BusinessName,
   BusinessDescription,
   BusinessAvatar,
} from './styles';

type IBusiness = {
   id: number;
   description: string;
   name: string;
   city: string;
   photoAvatar: ImageSourcePropType;
 }

interface IBusinessCarProps {
   business: IBusiness;
}

const BusinessCardLeft: React.FC<IBusinessCarProps> = ({ business }: IBusinessCarProps) => {
   return (
      <BackgroundItem>
         <BusinessContainer>
            <BusinessHeader>
               <City>{business.city}</City>
               <BusinessName>{business.name}</BusinessName>
            </BusinessHeader>
            <BusinessDescription>{business.description}</BusinessDescription>
         </BusinessContainer>
         <BusinessAvatar source={business.photoAvatar} />
      </BackgroundItem>
   );
}

export { BusinessCardLeft };