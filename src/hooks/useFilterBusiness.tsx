import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useBusiness } from './useBusiness';

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
 
const businessTargetAudienceData: ICategoryQuiz[] = [
   {
      id: 1,
      selected: false,
      title: 'B2B (Business to Business)',
      object: 'businessTargetAudience',
   },
   {
      id: 2,
      selected: false,
      title: 'B2B2C (Business to Business to Consumer)',
      object: 'businessTargetAudience',
   },
   {
      id: 3,
      selected: false,
      title: 'B2C (Business to Consumer)',
      object: 'businessTargetAudience',
   },
   {
      id: 4,
      selected: false,
      title: 'P2P (peer-to-peer)',
      object: 'businessTargetAudience',
   },
   {
      id: 5,
      selected: false,
      title: 'B2S (Business to social)',
      object: 'businessTargetAudience',
   },
   {
      id: 6,
      selected: false,
      title: 'B2E',
      object: 'businessTargetAudience',
   },
];

const processDevelopData: ICategoryQuiz[] = [
   { id: 1, title: 'Agile Modeling', selected: false, object: 'processDevelopment' },
   { id: 2, title: 'Agile Unified Process', selected: false, object: 'processDevelopment' },
   { id: 3, title: 'Behavior Driven Develop', selected: false, object: 'processDevelopment' },
   { id: 4, title: 'Crystal', selected: false, object: 'processDevelopment' },
   { id: 5, title: 'Dynamic Systems Develop', selected: false, object: 'processDevelopment' },
   { id: 6, title: 'Extreme Programming', selected: false, object: 'processDevelopment' },
   { id: 7, title: 'Feature Driven Develop', selected: false, object: 'processDevelopment' },
   { id: 8, title: 'Lean Software Develop', selected: false, object: 'processDevelopment' },
   { id: 9, title: 'Microsoft Solution', selected: false, object: 'processDevelopment' },
   { id: 10, title: 'Rapid Application', selected: false, object: 'processDevelopment' },
   { id: 11, title: 'RUP', selected: false, object: 'processDevelopment' },
   { id: 12, title: 'Scrum', selected: false, object: 'processDevelopment' },
   { id: 13, title: 'Test Drive Develop', selected: false, object: 'processDevelopment' },
   { id: 14, title: 'Agile software development', selected: false, object: 'processDevelopment' },
]

const timeDevelopmentData: ICategoryQuiz[] = [
   { id: 1, title: 'Até 6 meses', selected: false, object: 'timeDevelopment' },
   { id: 2, title: 'Entre 6 meses e 1 ano', selected: false, object: 'timeDevelopment' },
   { id: 3, title: 'Entre 1 e 3 anos', selected: false, object: 'timeDevelopment' },
   { id: 4, title: 'Acima de 3 anos', selected: false, object: 'timeDevelopment' },
]
type IBusinessFilter = "state" | "activityBusiness" | "businessTargetAudience" | "processDevelopment" | "timeDevelopment";

interface ICategoryQuiz {
   id: number;
   title: string;
   selected: boolean;
   object: IBusinessFilter;
 }

 type IFilterBusinessSelected = {
   [key in IBusinessFilter]: string[];
};

interface IFilterContext {
   filterState: ICategoryQuiz[];
   filterBusiness: ICategoryQuiz[];
   filterProcessDevelop: ICategoryQuiz[];
   filterTimeDevelopment: ICategoryQuiz[];
   filterBusinessTargetAudience: ICategoryQuiz[];
   filterSelectedBusiness: IFilterBusinessSelected,
   handlerSelectedTimeDevelopment(id: number): void;
   handlerSelectedProcessDevelop(id: number): void;
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
   const [businessTargetAudience, setBusinessTargetAudience] = useState<ICategoryQuiz[]>([]);
   const [processDevelopment, setProcessDevelop] = useState<ICategoryQuiz[]>([]);
   const [timeDevelopment, setTimeDevelopment] = useState<ICategoryQuiz[]>([]);
   const [filterSelected, setFilterSelected] = useState<IFilterBusinessSelected>({
      businessTargetAudience: [],
      activityBusiness: [],
      state: [],
      processDevelopment: [],
      timeDevelopment: []
   });

   useEffect(() => {
      setBusinessTargetAudience(() => businessTargetAudienceData);
      setBusiness(() => businessData);
      setState(() => stateData);
      setProcessDevelop(() => processDevelopData);
      setTimeDevelopment(() => timeDevelopmentData);
   }, []);
   
   /**
    * verifica se alguma categoria "Empresa" tem filtros aplicado;
   */
   useMemo(() => {
      if (state.some((s) => s.selected)) {
         return someFilter[3] = 'Empresas';
      }
      if (business.some((s) => s.selected)) {
         return someFilter[3] = 'Empresas';
      }
      if (businessTargetAudience.some((s) => s.selected)) {
         return someFilter[3] = 'Empresas';
      }
      
      return someFilter[3] = '';
   }, [state, businessTargetAudience, business]);
   
   useMemo(() => {
      if (processDevelopment.some((s) => s.selected)) {
         return someFilter[2] = 'Metodologias';
      }
      
      if (timeDevelopment.some((s) => s.selected)) {
         return someFilter[2] = 'Metodologias';
      }
      
      return someFilter[2] = '';
   }, [processDevelopment, timeDevelopment, someFilter]);
   /**
    * filtra todas as opções de filtros selecionada das categorias state, business e businessTargetAudience
    */
   const handlerSelectedFilters = useCallback(() => {
      const filterState: string[] = [];
      const filterBusiness: string[] = [];
      const filterTargetAudience: string[] = [];
      const filterProcessDevelopment: string[] = [];
      const filterTimeDevelopment: string[] = [];

      const checkFilterSelected = (filter: ICategoryQuiz) => {
         if (filter.selected) {
            switch(filter.object) {
               case 'activityBusiness': {
                  filterBusiness.push(filter.title);
                  break;
               }
               case 'businessTargetAudience': {
                  filterTargetAudience.push(filter.title);
                  break;
               }
               case 'state': {
                  filterState.push(filter.title);
                  break;
               }
               case 'processDevelopment': {
                  filterProcessDevelopment.push(filter.title);
                  break;
               }
               case 'timeDevelopment': {
                  filterTimeDevelopment.push(filter.title);
                  break;
               }
            }
         }
      }

      state.map(checkFilterSelected);
      business.map(checkFilterSelected);
      businessTargetAudience.map(checkFilterSelected);
      processDevelopment.map(checkFilterSelected);
      timeDevelopment.map(checkFilterSelected);

      setFilterSelected((params) => {
         params.state = filterState;
         params.activityBusiness = filterBusiness;
         params.businessTargetAudience = filterTargetAudience;
         params.processDevelopment = filterProcessDevelopment;
         params.timeDevelopment = filterTimeDevelopment;

         return params;
      })
   }, [state, business, businessTargetAudience, processDevelopment, timeDevelopment]);
   
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
      setBusinessTargetAudience((params) => {
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
   
   const handlerSelectedProcessDevelop = useCallback((id: number) => {
      setProcessDevelop((params) => {
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
   
   const handlerSelectedTimeDevelopment = useCallback((id: number) => {
      setTimeDevelopment((params) => {
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
   setBusinessTargetAudience((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setProcessDevelop((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setTimeDevelopment((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setFilterSelected((params) => {
      params.state = [];
      params.activityBusiness = [];
      params.businessTargetAudience = [];
      params.processDevelopment = [];
      params.timeDevelopment = [];

      return params;
   })
}, []);

   return (
      <FilterContext.Provider value={{ 
         filterState: state,
         filterBusiness: business,
         filterTimeDevelopment: timeDevelopment,
         filterSelectedBusiness: filterSelected,
         filterProcessDevelop: processDevelopment,
         filterBusinessTargetAudience: businessTargetAudience,
         handlerSelectedTimeDevelopment,
         handlerSelectedProcessDevelop,
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

function useFilterBusiness(): IFilterContext {
   const context = useContext(FilterContext);

   if (!context) {
     throw new Error("UseBusiness must be used within an BusinessProvider");
   }

   return context;    
}

export { FilterProvider, useFilterBusiness };