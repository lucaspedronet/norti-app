import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useBusiness } from '../hooks/business';

const businessData: ICategoryQuiz[] = [
   { id: 1, title: 'Agronegócio', selected: false, object: 'activityBusiness' },
   { id: 2, title: 'Automobilismo', selected: false, object: 'activityBusiness' },
   { id: 3, title: 'Big Data', selected: false, object: 'activityBusiness' },
   { id: 4, title: 'Biotecnologia', selected: false, object: 'activityBusiness' },
   { id: 5, title: 'Construção civil', selected: false, object: 'activityBusiness' },
   { id: 6, title: 'CRM', selected: false, object: 'activityBusiness' },
   { id: 7, title: 'Delivery', selected: false, object: 'activityBusiness' },
   { id: 8, title: 'Desenvolvimento de Software', selected: false, object: 'activityBusiness' },
   { id: 9, title: 'Educação', selected: false, object: 'activityBusiness' },
   { id: 10, title: 'Esportes', selected: false, object: 'activityBusiness' },
   { id: 11, title: 'Finanças', selected: false, object: 'activityBusiness' },
   { id: 12, title: 'Games', selected: false, object: 'activityBusiness' },
   { id: 13, title: 'Infantíl', selected: false, object: 'activityBusiness' },
   { id: 14, title: 'Internet', selected: false, object: 'activityBusiness' },
   { id: 15, title: 'Jurídico', selected: false, object: 'activityBusiness' },
   { id: 16, title: 'Logística', selected: false, object: 'activityBusiness' },
   { id: 17, title: 'Marketplace', selected: false, object: 'activityBusiness' },
   { id: 18, title: 'Meio Ambiente', selected: false, object: 'activityBusiness' },
   { id: 19, title: 'Móbile', selected: false, object: 'activityBusiness' },
   { id: 20, title: 'Mobilidade Urbana', selected: false, object: 'activityBusiness' },
   { id: 21, title: 'Nanotecnologia', selected: false, object: 'activityBusiness' },
   { id: 22, title: 'Pets', selected: false, object: 'activityBusiness' },
   { id: 23, title: 'Recrutamento', selected: false, object: 'activityBusiness' },
   { id: 24, title: 'Recursos Humanos', selected: false, object: 'activityBusiness' },
   { id: 25, title: 'Saúde e Beleza', selected: false, object: 'activityBusiness' },
   { id: 26, title: 'Segurança', selected: false, object: 'activityBusiness' },
   { id: 27, title: 'Segurança e Defesa', selected: false, object: 'activityBusiness' },
   { id: 28, title: 'Serviços Profissionais', selected: false, object: 'activityBusiness' },
   { id: 29, title: 'TIC e Telecom', selected: false, object: 'activityBusiness' },
   { id: 30, title: 'Transporte', selected: false, object: 'activityBusiness' },
   { id: 31, title: 'Turismo', selected: false, object: 'activityBusiness' },
   { id: 32, title: 'Vendas e Marketing', selected: false, object: 'activityBusiness' },
   { id: 33, title: 'Outros', selected: false, object: 'activityBusiness' },
];

const stateData: ICategoryQuiz[] = [
   { id: 1, title: 'Amapá', selected: false, object: 'state' },
   { id: 2, title: 'Amazonas', selected: false, object: 'state' },
   { id: 3, title: 'Pará', selected: false, object: 'state' },
   { id: 4, title: 'Rondônia', selected: false, object: 'state' },
   { id: 5, title: 'Roraima', selected: false, object: 'state' },
   { id: 6, title: 'Tocantins', selected: false, object: 'state' },
];
 
const productDigitalData: ICategoryQuiz[] = [
   {
      id: 1,
      selected: false,
      title: 'Aplicativo para smartphones',
      object: 'servicesProductsDigital',
   },
   {
      id: 2,
      selected: false,
      title: 'Sistema/aplicativo Web',
      object: 'servicesProductsDigital',
   },
   {
      id: 3,
      selected: false,
      title: 'PDV com internet',
      object: 'servicesProductsDigital',
   },
   {
      id: 4,
      selected: false,
      title: 'PDV sem internet',
      object: 'servicesProductsDigital',
   },
];

type IBusinessFilter = "state" | "activityBusiness" | "servicesProductsDigital";

interface ICategoryQuiz {
   id: number;
   title: string;
   selected: boolean;
   object: IBusinessFilter;
 }

 type IFilterBusinessSelected = {
   [key in IBusinessFilter]: ICategoryQuiz[];
};

interface IFilterContext {
   filterState: ICategoryQuiz[];
   filterBusiness: ICategoryQuiz[];
   filterProductServices: ICategoryQuiz[];
   filterSelectedBusiness: IFilterBusinessSelected,
   handlerSelectedState(id: number): void;
   handlerSelectedProduct(id: number): void;
   handlerSelectedBusiness(id: number): void;
   handlerSelectedFilters(): void;
   allCleanFilters(): void;
}

const FilterContext = createContext<IFilterContext>({} as IFilterContext);

const FilterProvider: React.FC = ({ children }) => {
   const { someFilter } = useBusiness();
   const [state, setState] = useState<ICategoryQuiz[]>([]);
   const [business, setBusiness] = useState<ICategoryQuiz[]>([]);
   const [productServices, setProductServices] = useState<ICategoryQuiz[]>([]);
   const [filterSelected, setFilterSelected] = useState<IFilterBusinessSelected>({
      servicesProductsDigital: [],
      activityBusiness: [],
      state: [],
   });

   useEffect(() => {
      setProductServices(() => productDigitalData);
      setBusiness(() => businessData);
      setState(() => stateData);
   }, []);

   useMemo(() => {
      if (state.some((s) => s.selected)) {
         return someFilter[3] = 'Empresas';
      }
      if (business.some((s) => s.selected)) {
         return someFilter[3] = 'Empresas';
      }
      if (productServices.some((s) => s.selected)) {
         return someFilter[3] = 'Empresas';
      }
      
      return someFilter[3] = '';
   }, [state, productServices, business]);
   /**
    * filtra todas as opções de filtros selecionada das categorias state, business e productServices
    */
   const handlerSelectedFilters = useCallback(() => {
      const filterState = state.filter((s) => s.selected !== false);
      const filterBusiness = business.filter((b) => b.selected);
      const filterProduct = productServices.filter((p) => p.selected);
      setFilterSelected((params) => {
         params.state = filterState;
         params.activityBusiness = filterBusiness;
         params.servicesProductsDigital = filterProduct;

         return params;
      })
   }, [state,business, productServices]);
   
   const handlerSelectedState = useCallback((id: number) => {
      setState((params) => {
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
      setProductServices((params) => {
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
   
   const handlerSelectedBusiness = useCallback((id: number) => {
      setBusiness((params) => {
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

   
  const allCleanFilters = useCallback(() => {
   setState((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setBusiness((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setProductServices((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setFilterSelected((params) => {
      params.state = [];
      params.activityBusiness = [];
      params.servicesProductsDigital = [];

      return params;
   })
}, []);

   return (
      <FilterContext.Provider value={{ 
         filterState: state,
         filterBusiness: business,
         filterProductServices: productServices,
         filterSelectedBusiness: filterSelected,
         handlerSelectedFilters,
         handlerSelectedBusiness,
         handlerSelectedProduct,
         handlerSelectedState,
         allCleanFilters,
      }}>
         {children}
      </FilterContext.Provider>
   )
};

function useFilter(): IFilterContext {
   const context = useContext(FilterContext);

   if (!context) {
     throw new Error("UseBusiness must be used within an BusinessProvider");
   }

   return context;    
}

export { FilterProvider, useFilter };