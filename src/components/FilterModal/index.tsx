import React, { useCallback, useEffect, useState } from 'react';
import { Modal, ModalProps, TouchableOpacity } from 'react-native';

import { ButtonFilterItem } from '../ButtonFilterItem';
import { ButtonSmall } from '../ButtonSmall';
import { ButtonViewFilter } from '../ButtonViewFilter';
import { ButtonRowSelected } from '../ButtonRowSelected';
import { useModal } from '../../hooks/useModal';
import { useFilter } from '../../hooks/useFilter';

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
   const { cleanFilter, isFilterApplication } = useModal();
   const { 
      filterState,
      filterBusiness,
      filterProductServices,
      handlerSelectedBusiness,
      handlerSelectedFilters,
      handlerSelectedProduct,
      handlerSelectedState,
      allCleanFilters,
   } = useFilter();


  return (
     <Modal transparent animationType="slide">
        <MaskBackground>
         <Container showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
         <Header>
            <IconClose name="keyboard-arrow-left" onPress={close} />
            <TitleModal>Filtros</TitleModal>
            <TouchableOpacity onPress={allCleanFilters} disabled={!!Boolean(isFilterApplication.includes("activityBusiness"))}>
               <CleanText disable={Boolean(isFilterApplication.includes("activityBusiness"))}>Limpar</CleanText>
            </TouchableOpacity>
         </Header>
            {/* <SessionCategory>
               <ListCategory 
                  data={state}
                  numColumns={2}
                  columnWrapperStyle={styles.container}
                  ListHeaderComponent={<TitleCategory>Por estado</TitleCategory>}
                  keyExtractor={(state) => String(state.id)}
                  renderItem={({ item }) =>  <ButtonFilterItem item={item} />}
               />
            </SessionCategory> */}
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
               <TitleCategory>Produto e serviço digital</TitleCategory>
               {filterProductServices.map((p) => (
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
            <ButtonViewFilter onPress={() => handlerSelectedFilters()}>Selecionar filtros</ButtonViewFilter>
         </Footer>
        </MaskBackground>
     </Modal>
  );
}

export { FilterModal };
 
 