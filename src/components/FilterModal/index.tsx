import React, { useCallback, useEffect, useState } from 'react';
import { Modal, ModalProps } from 'react-native';
import { ButtonFilterItem } from '../ButtonFilterItem';
import { ButtonSmall } from '../ButtonSmall';
import { ButtonViewFilter } from '../ButtonViewFilter';
import { ButtonRowSelected } from '../ButtonRowSelected';
import { 
   Container,
   MaskBackground,
   Header,
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

interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
 }
 
const stateData: ICategoryState[] = [
   { id: 1, title: 'Amapá', selected: false },
   { id: 2, title: 'Amazonas', selected: false },
   { id: 3, title: 'Pará', selected: false },
   { id: 4, title: 'Rondônia', selected: false },
   { id: 5, title: 'Roraima', selected: false },
   { id: 6, title: 'Tocantins', selected: true },
]
 
const businessData: ICategoryState[] = [
   { id: 1, title: 'Agronegócio', selected: false },
   { id: 2, title: 'Automobilismo', selected: false },
   { id: 3, title: 'Big Data', selected: false },
   { id: 4, title: 'Biotecnologia', selected: false },
   { id: 5, title: 'Construção civil', selected: false },
   { id: 6, title: 'CRM', selected: false },
   { id: 7, title: 'Delivery', selected: false },
   { id: 8, title: 'Desenvolvimento de Software', selected: false },
   { id: 9, title: 'Educação', selected: true },
   { id: 10, title: 'Esportes', selected: false },
   { id: 11, title: 'Finanças', selected: false },
   { id: 12, title: 'Games', selected: false },
   { id: 13, title: 'Infantíl', selected: true },
   { id: 14, title: 'Internet', selected: true },
   { id: 15, title: 'Jurídico', selected: true },
   { id: 16, title: 'Logística', selected: true },
   { id: 17, title: 'Marketplace', selected: true },
   { id: 18, title: 'Meio Ambiente', selected: true },
   { id: 19, title: 'Móbile', selected: true },
   { id: 20, title: 'Mobilidade Urbana', selected: true },
   { id: 21, title: 'Nanotecnologia', selected: true },
   { id: 22, title: 'Pets', selected: false },
   { id: 23, title: 'Recrutamento', selected: true },
   { id: 24, title: 'Recursos Humanos', selected: false },
   { id: 25, title: 'Saúde e Beleza', selected: true },
   { id: 26, title: 'Segurança', selected: true },
   { id: 27, title: 'Segurança e Defesa', selected: true },
   { id: 28, title: 'Serviços Profissionais', selected: false },
   { id: 29, title: 'TIC e Telecom', selected: true },
   { id: 30, title: 'Transporte', selected: true },
   { id: 31, title: 'Turismo', selected: true },
   { id: 32, title: 'Vendas e Marketing', selected: true },
   { id: 33, title: 'Outros', selected: false },
]
const productDigitalData: ICategoryState[] = [
   {
      id: 1,
      selected: false,
      title: 'Aplicativo para smartphones',
   },
   {
      id: 2,
      selected: false,
      title: 'Sistema/aplicativo Web',
   },
   {
      id: 3,
      selected: false,
      title: 'PDV com internet',
   },
   {
      id: 4,
      selected: false,
      title: 'PDV sem internet',
   },
];

const FilterModal: React.FC<IFilterModalProps> = ({ close }: IFilterModalProps) => {
   const [state, setSate] = useState<ICategoryState[]>([]);
   const [business, setBusiness] = useState<ICategoryState[]>([]);
   const [productDigital, setProductDigital] = useState<ICategoryState[]>([]);

   useEffect(() => {
      setBusiness(businessData);
      setSate(stateData);
      setProductDigital(productDigitalData);
   }, []);

   const handlerSelectedBusiness = useCallback((id: number) => {
      setBusiness((params) => {
         const newBusiness = params.map((business) => {
            if (business.id === id) {
               business.selected = !business.selected
               return business;
            }
            return business;
         });

         return newBusiness;
      });
   }, []);

   const handlerSelectedState = useCallback((id: number) => {
      setSate((params) => {
         const newState = params.map((state) => {
            if (state.id === id) {
               state.selected = !state.selected
               return state;
            }
            return state;
         });

         return newState;
      });
   }, []);

   const handlerSelectedProduct = useCallback((id: number) => {
      setProductDigital((params) => {
         const newProduct = params.map((state) => {
            if (state.id === id) {
               state.selected = !state.selected
               return state;
            }
            return state;
         });

         return newProduct;
      });
   }, []);

  return (
     <Modal transparent animationType="slide">
        <MaskBackground>
         <Container showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
         <Header>
            <IconClose name="keyboard-arrow-left" onPress={close} />
            <TitleModal>Filtros</TitleModal>
            <IconClose name="close" onPress={close} />
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
               <TitleCategory>Por estado</TitleCategory>
               <BoxCategory>
                  {state.map((item) => (
                     <ButtonFilterItem
                        key={item.id.toString()}
                        item={item} onPress={() => handlerSelectedState(item.id)}
                     />
                  ))}
               </BoxCategory>
            </SessionCategory>
            <SessionCategory>
               <TitleCategory>Por atividade da empresa</TitleCategory>
               <ByBusinessActivity>
                  {business.map((item) => (
                     <ButtonSmall
                        key={item.id.toString()}
                        item={item} onPress={() => handlerSelectedBusiness(item.id)}
                     />
                  ))}
               </ByBusinessActivity>
            </SessionCategory>
            <SessionCategory>
               <TitleCategory>Por produto e serviço digital</TitleCategory>
               {productDigital.map((p) => (
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
            <ButtonViewFilter>Selecionar filtros</ButtonViewFilter>
         </Footer>
        </MaskBackground>
     </Modal>
  );
}

export { FilterModal };
 
 