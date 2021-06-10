import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ContainerItem, BackgroundButton, TitleItem } from './styles';

interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
 }

interface IButtonSmallProps extends RectButtonProps {
   item: ICategoryState;
   onPress(): void;
}
 
const ButtonSmall: React.FC<IButtonSmallProps> = ({ item, onPress }: IButtonSmallProps) => {
   return (
      <ContainerItem selected={item.selected} onPress={onPress}>
         <BackgroundButton selected={item.selected} accessible={true}>
            <TitleItem selected={item.selected}>{item.title}</TitleItem>
         </BackgroundButton>
      </ContainerItem>
   );
}

export { ButtonSmall };