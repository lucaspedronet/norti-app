import React from 'react';

import { BusinessProvider } from './useBusiness';
import { ModalProvider } from './useModal';
import { FilterProvider } from './useFilterBusiness';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <BusinessProvider>
      <ModalProvider>
        <FilterProvider>
          {children}
        </FilterProvider>
      </ModalProvider>
    </BusinessProvider>
  );
}

export { HooksProvider };