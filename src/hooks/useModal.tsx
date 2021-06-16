import React, { 
   createContext,
   useCallback,
   useContext,
   ReactNode,
   useState,
   useMemo,
} from 'react';

interface IModalContextData {
   isOpen: boolean;
   Close(): void;
   showModal(): void;
   modalContent: ModalContentData;
}

type ModalContentData = {
   title?: string;
   content: ReactNode;
   footer?: string;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [close, setClose] = useState<boolean>(true);
  const [modalContent, setModalContent] = useState<ModalContentData>({} as ModalContentData);

  const isOpen = useMemo(() => !close, [close]);

  const Close = useCallback(() => setClose(true), []);

  const showModal = useCallback(() => {
   // setModalContent()
   setClose(false);
  }, []);

  return (
     <ModalContext.Provider value={{ isOpen, Close, modalContent, showModal }}>
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