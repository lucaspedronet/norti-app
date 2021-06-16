import React from 'react';

import { BusinessStore } from './business';
import { ModalProvider } from './useModal';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <BusinessStore>
      <ModalProvider>
        {children}
      </ModalProvider>
    </BusinessStore>
  );
}

export { HooksProvider };