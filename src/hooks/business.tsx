import React, { createContext, useEffect, useState } from 'react';
import businessData from '../services/data.json';

interface ICategoryBusiness {
   id: number;
   nameBusiness: string;
   state: string;
   city: string;
   selected: boolean;
   byBusinessActivity: string[];
   businessRevenueModel: string;
   businessTargetAudience: string[];
 }

interface ICategorySoftwareDevelopment {
   processDevelopment: string[];
   timeDevelopment: string[];
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

interface IBusinessQuiz {
   id: number;
   title: string;
   selected: boolean;
   businessQuiz: ICategoryBusiness;
   softwareDevelopmentQuiz: ICategorySoftwareDevelopment;
   languageQuiz: ICategoryLanguage;
   professionalQuiz: ICategoryProfessional;
 }

 interface IBusinessContext {
   businessQuiz: IBusinessQuiz[];
   setBusinessQuiz(data: IBusinessQuiz): void;
 }

 const BusinessContext = createContext<IBusinessContext>({} as IBusinessContext);
 
 const BusinessStore: React.FC = ({ children }) => {
   const [listBusinessQuiz, setListBusinessQuiz] = useState<IBusinessQuiz[]>(() => []);

   const setBusinessQuiz = (data: IBusinessQuiz) => {
      console.log(data);
   }

   return (
   <BusinessContext.Provider value={{ businessQuiz: listBusinessQuiz, setBusinessQuiz }}>
      {children}
   </BusinessContext.Provider>
   );
 }
 
 export { BusinessStore, BusinessContext };