import React from 'react';
import { TouchableOpacityProps } from 'react-native';
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

interface IBusinessCarProps extends TouchableOpacityProps {
   business: IBusinessQuiz;
   onPress(): void;
}

const BusinessCardRight: React.FC<IBusinessCarProps> = ({ business, onPress }: IBusinessCarProps) => {
   return (
      <BackgroundItem onPress={onPress}>
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