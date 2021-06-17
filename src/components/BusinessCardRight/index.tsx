import React from 'react';
import { IBusinessQuiz } from '../../hooks/business';
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

const BusinessCardRight: React.FC<IBusinessCarProps> = ({ business }: IBusinessCarProps) => {
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

export { BusinessCardRight };