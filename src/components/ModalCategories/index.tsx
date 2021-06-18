import React, { Fragment } from 'react';
import { ModalProps, Modal, View } from 'react-native';
import { IconCloseModal } from '../IconCloseModal';
import { icons } from '../../utils/constants/iconsFiltersCategories';

import { useModal } from '../../hooks/useModal';
import { useFilter } from '../../hooks/useFilter';
import { useBusiness } from '../../hooks/business';

import { FilterModal } from '../../components/FilterModal';
import { ButtonBase } from '../../components/ButtonBase';

import { 
  MaskBackground,
  CategoryFilter,
  CategoryRow,
  TitleText,
  Container,
  IconCode,
  Header,
  Footer,
  Label,
  Icon,
  Body,
} from './styles';

interface IModalCategoriesProps extends ModalProps {
  close(): void
}
type ISelectedFilter = "business" | "language" | "professional" | "softwareDevelopment" | "";

const ModalCategories: React.FC<IModalCategoriesProps> = ({ close }: IModalCategoriesProps) => {
  const { Close, isOpen, showModal, isFilter, toggleFilter } = useModal();
  const { someFilter } = useBusiness();
  const { allCleanFilters } = useFilter();

  function handlerFilterModal(filter: ISelectedFilter) {
    toggleFilter(filter)
    showModal();
  }

  function handlerCleanFilter(): void {
    allCleanFilters();
    showModal();
  }
  
  function handlerGoBack(): void {
    allCleanFilters();
    showModal();
    close();
 }

  return (
    <>
      {isFilter === "business" && <FilterModal visible={isOpen} close={Close} />}
      <Modal
        transparent
        animationType="slide"
      >
        <MaskBackground>
          <Container>
            <Header>
              <IconCloseModal nameIcon="chevron-down" onPress={handlerGoBack} />
              <TitleText>Filtrar por categoria</TitleText>
            </Header>
            <Body>
              {icons.map((category, index) => {
                return (
                  <Fragment key={index.toString()}>
                    <CategoryFilter onPress={() => handlerFilterModal(category.filter)}>
                      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        {index === 0 && <IconCode name={category.iconLeft} activeFilter={someFilter.includes(category.label)} />}
                        {index > 0 && <Icon name={category.iconLeft} activeFilter={someFilter.includes(category.label)} />}
                        <Label>{category.label}</Label>
                      </View>
                      <Icon name={category.iconRight} activeFilter={false} />
                    </CategoryFilter>
                    <CategoryRow />
                  </Fragment>
                );
              })
              }
            </Body>
            <Footer>
            {someFilter.filter(Boolean).length > 0 ? (
              <>
                <ButtonBase isButton="primary">Aplicar Filtro</ButtonBase>
                <ButtonBase isButton="secondary" onPress={handlerCleanFilter}>Limpar Filtro</ButtonBase>
              </>
              ) : null}
              </Footer>
            
          </Container>
        </MaskBackground>
      </Modal>
    </>
  );
}

export { ModalCategories } ;