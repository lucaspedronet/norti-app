import React from 'react';
import { IBusinessQuiz } from '../../hooks/useBusiness';

import { 
   BackgroundItem,
   BusinessContainer,
   BusinessHeader,
   City,
   BusinessName,
   BusinessDescription,
   BusinessAvatar,
} from './styles';

interface IBusinessCarProps {
   business: IBusinessQuiz;
}

const BusinessCardLeft: React.FC<IBusinessCarProps> = ({ business }: IBusinessCarProps) => {
   return (
      <BackgroundItem>
         <BusinessContainer>
            <BusinessHeader>
               <City>{business.businessCategory.city}</City>
               <BusinessName>{business.businessCategory.name}</BusinessName>
            </BusinessHeader>
            <BusinessDescription>{business.description}</BusinessDescription>
         </BusinessContainer>
         <BusinessAvatar source={business.photoAvatar} />
      </BackgroundItem>
   );
}

export { BusinessCardLeft };