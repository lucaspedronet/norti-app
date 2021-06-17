import React, { createContext, useContext, useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import businessData from '../services/data.js'

interface ICategoryBusiness {
   name: string;
   state: string;
   city: string;
   byBusinessActivity: string[];
   businessRevenueModel: string;
   businessTargetAudience: string[];
 }

interface ICategorySoftwareDevelopment {
   processDevelopment: string[];
   timeDevelopment: string;
   implementProjectAdapter: string;
   methodologyBenefits: string[];
   methodologyDisadvantages: string[];
}

interface ICategoryLanguage {
   languageSoftware: string[];
   frameworksFrontend: string[];
   frameworksBackend: string[];
   testMethodology: string[];
   testUnitaryFrontBack: string[];
   typeArchitectureProject: string[];
}

interface ICategoryProfessional {
   timeBusiness: string;
   LevelProfessionalTechnology: string;
   technologyWorkMode: string;
   menSize: string;
   girlSize: string;
   workModalityHiring: string;
}

export interface IBusinessQuiz {
   id: number;
   selected: boolean;
   photoAvatar: ImageSourcePropType;
   description: string;
   businessCategory: ICategoryBusiness;
   softwareDevelopmentCategory: ICategorySoftwareDevelopment;
   languageCategory: ICategoryLanguage;
   professionalCategory: ICategoryProfessional;
 }

 interface IBusinessContext {
   setBusinessQuiz(data: IBusinessQuiz): void;
   setSomeFilterApplication(array: string[]): void;
   businessQuiz: IBusinessQuiz[];
   someFilter: string[];
 }

 const BusinessContext = createContext<IBusinessContext>({} as IBusinessContext);
 
 const BusinessStore: React.FC = ({ children }) => {
   const [listBusinessQuiz, setListBusinessQuiz] = useState<IBusinessQuiz[]>(() => []);
   const [someFilterApplication, setSomeFilterApplication] = useState<string[]>([]);

   const setBusinessQuiz = (data: IBusinessQuiz) => {}

   useEffect(() => {
      setListBusinessQuiz(() => businessData);
   }, []);

   return (
   <BusinessContext.Provider value={{ 
      businessQuiz: listBusinessQuiz, 
      someFilter: someFilterApplication,
      setSomeFilterApplication,
      setBusinessQuiz, 
   }}>
      {children}
   </BusinessContext.Provider>
   );
 }

 function useBusiness(): IBusinessContext {
    const context = useContext(BusinessContext);

    if (!context) {
      throw new Error("UseBusiness must be used within an BusinessProvider");
    }

    return context;    
 }
 
 export { BusinessStore, useBusiness };