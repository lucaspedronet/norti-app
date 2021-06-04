import React from 'react';
import { Modal, ModalProps, StyleSheet } from 'react-native';
import { ButtonFilterItem } from '../ButtonFilterItem';
import { ButtonSmall } from '../ButtonSmall';
import { ButtonViewFilter } from '../ButtonViewFilter';
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
 
const state: ICategoryState[] = [
   { id: 1, title: 'Amapá', selected: false },
   { id: 2, title: 'Amazonas', selected: false },
   { id: 3, title: 'Pará', selected: false },
   { id: 4, title: 'Rondônia', selected: false },
   { id: 5, title: 'Roraima', selected: false },
   { id: 6, title: 'Tocantins', selected: true },
]
 
const business: ICategoryState[] = [
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
const FilterModal: React.FC<IFilterModalProps> = ({ close }: IFilterModalProps) => {
   

  return (
     <Modal transparent animationType="slide">
        <MaskBackground>
         <Container>
            <Header>
               <IconClose name="keyboard-arrow-down" onPress={close} />
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
                  {state.map((item) => <ButtonFilterItem key={item.id.toString()} item={item} />)}
               </BoxCategory>
            </SessionCategory>
            <SessionCategory>
               <TitleCategory>Por atividade da empresa</TitleCategory>
               <ByBusinessActivity>
                  {business.map((item) => <ButtonSmall key={item.id.toString()} item={item} />)}
               </ByBusinessActivity>
            </SessionCategory>
         </Container>
         <Footer>
            <ButtonViewFilter>Ver resultados</ButtonViewFilter>
         </Footer>
        </MaskBackground>
     </Modal>
  );
}

export { FilterModal };
const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "space-between",
     backgroundColor: "transparent",
     padding: 0,
     marginBottom: 12,
   },
 });
 
 