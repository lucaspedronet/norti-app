import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useBusiness } from './useBusiness';

const benefitsDevelopData: ICategoryQuiz[] = [
   { id: 1, title: 'Transparência nas atividades', selected: false, object: 'benefitsDevelop' },
   { id: 2, title: 'Entendimento sobre o projeto', selected: false, object: 'benefitsDevelop' },
   { id: 3, title: 'Uso de artefatos', selected: false, object: 'benefitsDevelop' },
   { id: 4, title: 'Uso de diagramas', selected: false, object: 'benefitsDevelop' },
   { id: 5, title: 'Documentação de fácil', selected: false, object: 'benefitsDevelop' },
   { id: 6, title: 'Aumento de produtividade', selected: false, object: 'benefitsDevelop' },
   { id: 7, title: 'Aumento de qualidade nas entregas', selected: false, object: 'benefitsDevelop' },
   { id: 8, title: 'Melhoria na comunicação', selected: false, object: 'benefitsDevelop' },
   { id: 9, title: 'Ganho de autonomia', selected: false, object: 'benefitsDevelop' },
   { id: 10, title: 'Capacidade da equipe', selected: false, object: 'benefitsDevelop' },
   { id: 11, title: 'Redução de falhas', selected: false, object: 'benefitsDevelop' },
];

const timeDevelopSoftwareData: ICategoryQuiz[] = [
   { id: 1, title: 'Até 6 meses', selected: false, object: 'timeDevelopSoftware' },
   { id: 2, title: 'Entre 6 meses e 1 ano', selected: false, object: 'timeDevelopSoftware' },
   { id: 3, title: 'Entre 1 e 3 anos', selected: false, object: 'timeDevelopSoftware' },
   { id: 4, title: 'Acima de 3 anos', selected: false, object: 'timeDevelopSoftware' },
];

const baseProcessDevelopData: ICategoryQuiz[] = [
   {
      id: 1,
      selected: false,
      title: 'Extreme Programming (XP)',
      object: 'baseProcessDevelop',
   },
   {
      id: 2,
      selected: false,
      title: 'Scrum',
      object: 'baseProcessDevelop',
   },
   {
      id: 3,
      selected: false,
      title: 'Agile Software Development ',
      object: 'baseProcessDevelop',
   },
   {
      id: 4,
      selected: false,
      title: 'Lean Software Development',
      object: 'baseProcessDevelop',
   },
];

type AgileDevelopFilter = "baseProcessDevelop" | "timeDevelopSoftware" | "benefitsDevelop";

interface ICategoryQuiz {
   id: number;
   title: string;
   selected: boolean;
   object: AgileDevelopFilter;
 }

type IFilterBusinessSelected = {
   [key in AgileDevelopFilter]: string[];
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
   const [benefitsDevelop, setBenefitsDevelopData] = useState<ICategoryQuiz[]>([]);
   const [timeDevelopSoftware, setTimeDevelopSoftware] = useState<ICategoryQuiz[]>([]);
   const [baseProcessDevelop, setBaseProcessDevelop] = useState<ICategoryQuiz[]>([]);
   const [filterSelected, setFilterSelected] = useState<IFilterBusinessSelected>({
      baseProcessDevelop: [],
      timeDevelopSoftware: [],
      benefitsDevelop: [],
   });

   console.log(filterSelected);
   useEffect(() => {
      setBaseProcessDevelop(() => baseProcessDevelopData);
      setTimeDevelopSoftware(() => timeDevelopSoftwareData);
      setBenefitsDevelopData(() => benefitsDevelopData);
   }, []);
   
   /**
    * verifica se alguma categoria "Empresa" tem filtros aplicado;
   */
   useMemo(() => {
      if (benefitsDevelop.some((s) => s.selected)) {
         return someFilter[3] = 'Metodologias';
      }
      if (timeDevelopSoftware.some((s) => s.selected)) {
         return someFilter[3] = 'Metodologias';
      }
      if (baseProcessDevelop.some((s) => s.selected)) {
         return someFilter[3] = 'Metodologias';
      }
      
      return someFilter[3] = '';
   }, [benefitsDevelop, baseProcessDevelop, timeDevelopSoftware]);
   /**
    * filtra todas as opções de filtros selecionada das categorias benefitsDevelop, timeDevelopSoftware e baseProcessDevelop
    */
   const handlerSelectedFilters = useCallback(() => {
      const filterState: string[] = [];
      const filterBusiness: string[] = [];
      const filterTargetAudience: string[] = [];

      const formattedString = (filter: string): string => filter.toLocaleLowerCase('pt-br').trim();

      const checkFilterSelected = (filter: ICategoryQuiz) => {
         if (filter.selected) {
            switch(filter.object) {
               case 'timeDevelopSoftware': {
                  filterBusiness.push(filter.title);
                  break;
               }
               case 'baseProcessDevelop': {
                  filterTargetAudience.push(filter.title);
                  break;
               }
               case 'benefitsDevelop': {
                  filterState.push(filter.title);
                  break;
               }
            }
         }
      }

      benefitsDevelop.map(checkFilterSelected);
      timeDevelopSoftware.map(checkFilterSelected);
      baseProcessDevelop.map(checkFilterSelected);

      setFilterSelected((params) => {
         params.benefitsDevelop = filterState;
         params.timeDevelopSoftware = filterBusiness;
         params.baseProcessDevelop = filterTargetAudience;

         return params;
      })
   }, [benefitsDevelop,timeDevelopSoftware, baseProcessDevelop]);
   
   const handlerSelectedState = useCallback((id: number) => {
      setBenefitsDevelopData((params) => {
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
      setBaseProcessDevelop((params) => {
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
      setTimeDevelopSoftware((params) => {
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
   setBenefitsDevelopData((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setTimeDevelopSoftware((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setBaseProcessDevelop((params) => params.map((item) => Object.assign(item, { ...item, selected: false })));
   setFilterSelected((params) => {
      params.benefitsDevelop = [];
      params.timeDevelopSoftware = [];
      params.baseProcessDevelop = [];

      return params;
   })
}, []);

   return (
      <FilterContext.Provider value={{ 
         filterState: benefitsDevelop,
         filterBusiness: timeDevelopSoftware,
         filterProductServices: baseProcessDevelop,
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

function useFilterBusiness(): IFilterContext {
   const context = useContext(FilterContext);

   if (!context) {
     throw new Error("UseBusiness must be used within an BusinessProvider");
   }

   return context;    
}

export { FilterProvider, useFilterBusiness };