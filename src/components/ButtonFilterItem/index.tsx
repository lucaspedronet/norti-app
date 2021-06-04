import React from 'react';

import { ContainerItem, BackgroundButton, TitleItem } from './styles';

interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
 }

interface IButtonFilterItemProps {
   item: ICategoryState;
}
 
const ButtonFilterItem: React.FC<IButtonFilterItemProps> = ({ item }: IButtonFilterItemProps) => {
   return (
      <ContainerItem selected={item.selected}>
         <BackgroundButton selected={item.selected} accessible>
            <TitleItem selected={item.selected}>{item.title}</TitleItem>
         </BackgroundButton>
      </ContainerItem>
   );
}

export { ButtonFilterItem };