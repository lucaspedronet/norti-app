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

const FilterModal: React.FC<IFilterModalProps> = ({ close }: IFilterModalProps) => {
   const { someFilter } = useBusiness();
   const { 
      filterState,
      filterBusiness,
      filterBusinessTargetAudience,
      handlerSelectedBusiness,
      handlerSelectedFilters,
      handlerSelectedProduct,
      handlerSelectedState,
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


  return (
     <Modal transparent animationType="slide">
        <MaskBackground>
         <Container showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
         <Header>
            <IconClose name="keyboard-arrow-left" onPress={handlerGoBack} />
            <TitleModal>Filtros</TitleModal>
            <TouchableOpacity onPress={allCleanFilters} disabled={!someFilter.includes("Empresas")}>
               <CleanText disable={someFilter.includes("Empresas")}>Limpar</CleanText>
            </TouchableOpacity>
         </Header>
            <SessionCategory>
               <TitleCategory>Estado</TitleCategory>
               <BoxCategory>
                  {filterState.map((item) => (
                     <ButtonFilterItem
                        key={item.id.toString()}
                        item={item} onPress={() => handlerSelectedState(item.id)}
                     />
                  ))}
               </BoxCategory>
            </SessionCategory>
            <SessionCategory>
               <TitleCategory>Atividade da empresa</TitleCategory>
               <ByBusinessActivity>
                  {filterBusiness.map((item) => (
                     <ButtonSmall
                        key={item.id.toString()}
                        item={item} onPress={() => handlerSelectedBusiness(item.id)}
                     />
                  ))}
               </ByBusinessActivity>
            </SessionCategory>
            <SessionCategory>
               <TitleCategory>P??blico alvo</TitleCategory>
               {filterBusinessTargetAudience.map((p) => (
                  <ButtonRowSelected
                     key={p.id}
                    onPress={() => handlerSelectedProduct(p.id)}
                    selected={p.selected}
                  >
                    {p.title}
                  </ButtonRowSelected>
               ))}
            </SessionCategory>
         </Container>
         <Footer>
            {someFilter.includes('Empresas') && <ButtonViewFilter onPress={handlerApplicationFilter}>Selecionar filtros</ButtonViewFilter>}
            
         </Footer>
        </MaskBackground>
     </Modal>
  );
}

export { FilterModal };
 
 