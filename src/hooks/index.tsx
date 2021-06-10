import React from 'react';

import { BusinessStore } from './business';

const HooksProvider: React.FC = ({ children }) => {
  return <BusinessStore>{children}</BusinessStore>;
}

export { HooksProvider };