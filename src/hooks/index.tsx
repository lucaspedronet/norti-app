import React from 'react';

import { BusinessStore } from './business';
import { ModalProvider } from './useModal';
import { FilterProvider } from './useFilter';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <BusinessStore>
      <ModalProvider>
        <FilterProvider>
          {children}
        </FilterProvider>
      </ModalProvider>
    </BusinessStore>
  );
}

export { HooksProvider };