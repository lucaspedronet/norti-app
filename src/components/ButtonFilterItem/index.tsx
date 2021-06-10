import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ContainerItem, BackgroundButton, TitleItem } from './styles';

interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
 }

interface IButtonFilterItemProps extends TouchableOpacityProps {
   item: ICategoryState;
   onPress(): void;
}
 
const ButtonFilterItem: React.FC<IButtonFilterItemProps> = ({ item, onPress }: IButtonFilterItemProps) => {
   console.log("pk", item);
   return (
      <ContainerItem selected={item.selected} onPress={onPress}>
         <BackgroundButton selected={item.selected} accessible>
            <TitleItem selected={item.selected}>{item.title}</TitleItem>
         </BackgroundButton>
      </ContainerItem>
   );
}

export { ButtonFilterItem };