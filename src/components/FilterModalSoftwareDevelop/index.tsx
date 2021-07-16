import React from 'react';
import { Modal, ModalProps, TouchableOpacity } from 'react-native';

import { ButtonFilterItem } from '../ButtonFilterItem';
import { ButtonSmall } from '../ButtonSmall';
import { ButtonViewFilter } from '../ButtonViewFilter';
import { ButtonRowSelected } from '../ButtonRowSelected';
import { useModal } from '../../hooks/useModal';
import { useFilterBusiness } from '../../hooks/useFilterBusiness';
import { useBusiness } from '../../hooks/useBusiness';

import { 
   Container,
   MaskBackground,
   Header,
   CleanText,
   IconClose,
   TitleModal,
   SessionCategory,
   BoxCategory,
   ByBusinessActivity,
   TitleCategory,
   Footer,
} from './styles';

interface IFilterModalProps extends ModalProps {
   close(): void
}

const FilterModalSoftwareDevelop: React.FC<IFilterModalProps> = ({ close }: IFilterModalProps) => {
   const { someFilter } = useBusiness();
   const {
      filterTimeDevelopment,
      filterProcessDevelop,
      handlerSelectedProcessDevelop,
      handlerSelectedTimeDevelopment,
      handlerSelectedFilters,
      allCleanFilters,
   } = useFilterBusiness();

   function handlerApplicationFilter(): void {
      handlerSelectedFilters();
      close();      
   }

   function handlerGoBack(): void {
      allCleanFilters();
      close();
   }
   console.log(someFilter)


  return (
     <Modal transparent animationType="slide">
        <MaskBackground>
         <Container showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
         <Header>
            <IconClose name="keyboard-arrow-left" onPress={handlerGoBack} />
            <TitleModal>Filtros</TitleModal>
            <TouchableOpacity onPress={allCleanFilters} disabled={!someFilter.includes("Metodologias")}>
               <CleanText disable={someFilter.includes("Metodologias")}>Limpar</CleanText>
            </TouchableOpacity>
         </Header>
            <SessionCategory>
               <TitleCategory>Metodologias</TitleCategory>
               <ByBusinessActivity>
                  {filterProcessDevelop.map((item) => (
                     <ButtonSmall
                        key={item.id.toString()}
                        item={item} onPress={() => handlerSelectedProcessDevelop(item.id)}
                     />
                  ))}
               </ByBusinessActivity>
            </SessionCategory>
            <SessionCategory>
               <TitleCategory>Tempo desenvolvimento</TitleCategory>
               <BoxCategory>
                  {filterTimeDevelopment.map((item) => (
                     <ButtonFilterItem
                        key={item.id.toString()}
                        item={item} onPress={() => handlerSelectedTimeDevelopment(item.id)}
                     />
                  ))}
               </BoxCategory>
            </SessionCategory>
         </Container>
         <Footer>
            {someFilter.includes('Metodologias') && <ButtonViewFilter onPress={handlerApplicationFilter}>Selecionar filtros</ButtonViewFilter>}
            
         </Footer>
        </MaskBackground>
     </Modal>
  );
}

export { FilterModalSoftwareDevelop };
 
 