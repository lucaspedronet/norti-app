import React, { Fragment } from 'react';
import { ModalProps, Modal, View } from 'react-native';
import { IconCloseModal } from '../IconCloseModal';
import { icons } from '../../utils/constants/iconsFiltersCategories';

import { useModal } from '../../hooks/useModal';
import { useFilter } from '../../hooks/useFilter';
import { useBusiness, IBusinessQuiz } from '../../hooks/business';

import { FilterModal } from '../../components/FilterModal';
import { ButtonBase } from '../../components/ButtonBase';

import businessData from '../../services/data.js'

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

interface ICategoryBusiness {
  name: string;
  state: string;
  city: string;
  byBusinessActivity: string[];
  businessRevenueModel: string;
  businessTargetAudience: string[];
}
interface IModalCategoriesProps extends ModalProps {
  close(): void
}

type ISelectedFilter = "business" | "language" | "professional" | "softwareDevelopment" | "";

const ModalCategories: React.FC<IModalCategoriesProps> = ({ close }: IModalCategoriesProps) => {
  const { Close, isOpen, showModal, isFilter, toggleFilter } = useModal();
  const { someFilter, setBusinessQuiz } = useBusiness();
  const { allCleanFilters, filterSelectedBusiness } = useFilter();

  function handlerFilterModal(filter: ISelectedFilter) {
    toggleFilter(filter)
    showModal();
  }

  function handlerCleanFilter(): void {
    const newBusiness: IBusinessQuiz[] = businessData;
    setBusinessQuiz(newBusiness);
    allCleanFilters();
    showModal();
  }
  
  function handlerGoBack(): void {
    allCleanFilters();
    showModal();
    close();
 }

 function handlerApplicationFilter(): void {
   console.log('test...');
   showModal();
   close();
   onFilterInBusinessList();
 }

 const checkCategoryActivityBusiness = (activityBusiness: string): boolean => 
    filterSelectedBusiness.activityBusiness.includes(activityBusiness);
 
 function onFilterInBusinessList() {
  let categoryActivity;
  let businessTargetAudience;
  let newBusiness: IBusinessQuiz[] = [];
  const businessQuiz: IBusinessQuiz[] = businessData;
  
  newBusiness = businessQuiz.map((b) => {
    categoryActivity = b.businessCategory.byBusinessActivity.filter(checkCategoryActivityBusiness);
    if (categoryActivity.length > 0) {
      console.log(categoryActivity);
      console.log(b.businessCategory.name);
      return b;
    }
  }).filter(Boolean);

  console.log(newBusiness);
  setBusinessQuiz(newBusiness)
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
                <ButtonBase isButton="primary" onPress={handlerApplicationFilter}>Aplicar Filtro</ButtonBase>
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