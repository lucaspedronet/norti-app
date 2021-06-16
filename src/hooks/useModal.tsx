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
   showModal(): void;
   toggleFilter(filter: ISelectedFilter): void;
   isOpen: boolean;
   isFilter: ISelectedFilter;
   useCleanFilter(array: ICategoryState[]): ICategoryState[];
}
interface ICategoryState {
   id: number;
   title: string;
   selected: boolean;
 }

type ModalContentData = {
   title?: string;
   content: ReactNode;
   footer?: string;
}

type ISelectedFilter = "business" | "language" | "professional" | "softwareDevelopment" | "";

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [close, setClose] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>('');

  const isOpen = useMemo(() => !close, [close]);
  
  const isFilter = useMemo(() => selectedFilter, [selectedFilter]);

  const Close = useCallback(() => {
     setClose(true);
     setSelectedFilter('');
   }, []);
  
  const toggleFilter = useCallback((filter: ISelectedFilter) => setSelectedFilter(() => filter), []);

  const showModal = useCallback(() => setClose(() => false), []);

  const useCleanFilter = useCallback((array: ICategoryState[]) => {
     const newArray = array.map((item) => Object.assign(item, { ...item, selected: false }));

     return newArray;
  }, []);

  return (
     <ModalContext.Provider value={{ isOpen, Close, showModal, isFilter, toggleFilter, useCleanFilter }}>
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