import React, { 
   createContext,
   useCallback,
   useContext,
   ReactNode,
   useState,
   useMemo,
} from 'react';

interface IModalContextData {
   Close(): void;
   isOpen: boolean;
   isFilter: ISelectedFilter;
   showModal(): void;
   cleanFilter(array: ICategoryState[]): ICategoryState[];
   toggleFilter(filter: ISelectedFilter): void;
   isFilterApplication: IBusinessFilter[];
   isExistFilterApplication(array: ICategoryState[]): boolean;
}
interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
   object: IBusinessFilter;
 }

type ModalContentData = {
   title?: string;
   content: ReactNode;
   footer?: string;
}

type IBusinessFilter = "state" | "activityBusiness" | "servicesProductsDigital";

type ISelectedFilter = "business" | "language" | "professional" | "softwareDevelopment" | "";

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [close, setClose] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>('');
  const [filterApplication, setFilterApplication] = useState<IBusinessFilter[]>([]);

  const isOpen = useMemo(() => !close, [close]);
  
  const isFilter = useMemo(() => selectedFilter, [selectedFilter]);
  
  const isFilterApplication = useMemo(() => filterApplication, [filterApplication]);

  const Close = useCallback(() => {
     setClose(true);
     setSelectedFilter('');
   }, []);
  
  const toggleFilter = useCallback((filter: ISelectedFilter) => setSelectedFilter(() => filter), []);

  const showModal = useCallback(() => setClose(() => false), []);

  const cleanFilter = useCallback((array: ICategoryState[]) => {
     const newArray = array.map((item) => Object.assign(item, { ...item, selected: false }));

     return newArray;
  }, []);

  const isExistFilterApplication = useCallback((array: ICategoryState[]): boolean => {
     if (array.length <= 0) return false;

     const checkIsFilterApplication = (filter: ICategoryState) => filter.selected === true;

     const allFalse = array.every(checkIsFilterApplication);
     if (allFalse) {
        setFilterApplication((filter) => [...filter, array[0].object])
     }

     return allFalse;
  }, []);

  return (
     <ModalContext.Provider value={{ 
        Close,
        isOpen,
        isFilter,
        showModal,
        cleanFilter,
        toggleFilter,
        isFilterApplication,
        isExistFilterApplication
     }}>
        {children}
     </ModalContext.Provider>
  )
}

function useModal(): IModalContextData {
   const context = useContext(ModalContext);

   if (!context) {
      throw new Error("UseModal must be used within an ModalProvider");
   }
   
   return context;
}

export { ModalProvider, useModal } ;