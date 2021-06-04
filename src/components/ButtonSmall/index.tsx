import React from 'react';

import { ContainerItem, BackgroundButton, TitleItem } from './styles';

interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
 }

interface IButtonSmallProps {
   item: ICategoryState;
}
 
const ButtonSmall: React.FC<IButtonSmallProps> = ({ item }: IButtonSmallProps) => {
   return (
      <ContainerItem selected={item.selected}>
         <BackgroundButton selected={item.selected} accessible>
            <TitleItem selected={item.selected}>{item.title}</TitleItem>
         </BackgroundButton>
      </ContainerItem>
   );
}

export { ButtonSmall };