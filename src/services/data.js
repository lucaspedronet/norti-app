const avatarAssinaDoc = require("../assets/assinadoc-02.png");
const avatarDefault = require("../assets/default.png");
const avatarTonolucro = require("../assets/tonolucro.png");
console.log(avatarAssinaDoc)
module.exports = [
   {
    "id": 10,
    "selected": false,
    "description": "",
    "photoAvatar": avatarAssinaDoc,
    "businessCategory": {
       "name": "AssinaDoc",
       "state": "Amapá",
       "city": "Macapá",
       "byBusinessActivity": ["Serviços Profissionais", "SAAS"],
       "businessRevenueModel": "Software como Serviço (SaaS)",
       "businessTargetAudience": ["B2B (Business to Business)"]
     },
     "softwareDevelopmentCategory": {
        "processDevelopment": ["Scrum"],
        "timeDevelopment": "Acima de 3 anos",
        "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
        "methodologyBenefits": ["Transparência nas atividades realizadas pelo time"," Entendimento sobre o projeto"," Uso de artefatos para entendimento do problema"," Documentação de fácil compreensão"," Aumento de produtividade nas entregas","Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos, Redução de falhas"],
        "methodologyDisadvantages": ["Nenhuma"]
     },
     "languageCategory": {
        "languageSoftware": ["JavaScript", "PHP", "Python"],
        "frameworksFrontend": ["Não"],
        "frameworksBackend": ["Não"],
        "testMethodology": ["TDD (Test-driven Development)"],
        "testUnitaryFrontBack": ["Nenhum"],
        "typeArchitectureProject": ["Arquitetura MVC (Model-View-Controller)"]
 
     },
     "professionalCategory": {
        "timeBusiness": "Menos de 1 ano",
        "LevelProfessionalTechnology": "Muito difícil (7)",
        "technologyWorkMode": "Remoto",
        "menSize": "até 5 profissionais",
        "girlSize": "até 5 profissionais",
        "workModalityHiring": "Ambas"
     }
   },
   {
    "id": 1,
    "selected": false,
    "description": "",
    "photoAvatar": avatarDefault,
    "businessCategory": {
       "name": "detudo.app",
       "state": "Tocantins",
       "city": "Palmas",
       "byBusinessActivity": ["Delivery", "Internet", "Marketplace", "Vendas e Marketing"],
       "businessRevenueModel": "Software como Serviço (SaaS)",
       "businessTargetAudience": ["B2B2C (Business to Business to Consumer)"]
     },
     "softwareDevelopmentCategory": {
        "processDevelopment": ["Extreme Programming (XP)", "Scrum"],
        "timeDevelopment": "Entre 1 e 3 anos",
        "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
        "methodologyBenefits": ["Aumento de produtividade nas entregas", "Ganho de autonomia da equipe e indivíduos", "Capacidade da equipe responder rápido a mudanças no projetos"],
        "methodologyDisadvantages": ["Nenhuma"]
     },
     "languageCategory": {
        "languageSoftware": ["JavaScript", "PHP"],
        "frameworksFrontend": ["Bootstrap"],
        "frameworksBackend": ["Próprio"],
        "testMethodology": ["Testes manuais"],
        "testUnitaryFrontBack": ["Nenhum"],
        "typeArchitectureProject": ["Arquitetura MVC (Model-View-Controller)"]
 
     },
     "professionalCategory": {
        "timeBusiness": "Entre 1 e 3 anos",
        "LevelProfessionalTechnology": "Muito baixa (2)",
        "technologyWorkMode": "Remoto",
        "menSize": "até 5 profissionais",
        "girlSize": "até 5 profissionais",
        "workModalityHiring": "PJ (Pessoa Jurídica)"
     }
   },
   {
    "id": 2,
    "selected": false,
    "description": "",
    "photoAvatar": avatarDefault,
    "businessCategory": {
        "name": "Dix BPO",
        "state": "Tocantins",
        "city": "Palmas",
        "byBusinessActivity": ["Agronegócio", "Delivery", "Desenvolvimento de Software", "Esportes", "Internet", "Mobile", "Saúde e beleza", "Segurança"],
        "businessRevenueModel": "API",
        "businessTargetAudience": ["B2B (Business to Business)", "B2B2C (Business to Business to Consumer)", "B2C (Business to Consumer)", "B2S (Business to social)"]
      },
      "softwareDevelopmentCategory": {
         "processDevelopment": [""],
         "timeDevelopment": "",
         "implementProjectAdapter": "",
         "methodologyBenefits": [""],
         "methodologyDisadvantages": [""]
      },
     "languageCategory": {
        "languageSoftware": ["JavaScript", "PHP", "TypeScript", "Dart"],
       "frameworksFrontend": ["Angular", "Flutter"],
       "frameworksBackend": ["Laravel"],
       "testMethodology": ["Nenhuma"],
       "testUnitaryFrontBack": ["Nenhuma"],
       "typeArchitectureProject": ["Arquitetura MVC (Model-View-Controller)"]
 
     },
     "professionalCategory": {
        "timeBusiness": "Entre 1 e 3 anos",
        "LevelProfessionalTechnology": "Difícil (5)",
        "technologyWorkMode": "Remoto",
        "menSize": "entre 5 e 10 profissionais",
        "girlSize": "até 5 profissionais",
        "workModalityHiring": "Ambas"
     }
   },
   {
     "id": 3,
     "selected": false,
     "description": "",
     "photoAvatar": avatarDefault,
     "businessCategory": {
        "name": "Raví",
        "state": "Tocantins",
        "city": "Palmas",
        "byBusinessActivity": ["Serviços Profissionais", "TIC e Telecom"],
        "businessRevenueModel": "Software como Serviço (SaaS)",
        "businessTargetAudience": ["B2B2C (Business to Business to Consumer)"]
      },
      "softwareDevelopmentCategory": {
         "processDevelopment": ["Lean Software Development (LSD)"],
         "timeDevelopment": "Até 6 meses",
         "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
         "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Uso de artefatos para entendimento do problema", "Uso de diagramas para compreender a solução (o projeto)", "Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos"],
         "methodologyDisadvantages": ["Problemas com prazos"]
      },
     "languageCategory": {
        "languageSoftware": ["JavaScript", "PHP"],
       "frameworksFrontend": ["React (é considerado um framework dentro de um ecossistema de React)"],
       "frameworksBackend": ["Nenhum"],
       "testMethodology": ["Nenhum"],
       "testUnitaryFrontBack": ["Nenhum"],
       "typeArchitectureProject": ["Arquitetura de Microservices"]
 
     },
     "professionalCategory": {
        "timeBusiness": "Menos de 1 ano",
        "LevelProfessionalTechnology": "Nenhuma (0)",
        "technologyWorkMode": "Remoto",
        "menSize": "até 5 profissionais",
        "girlSize": "Nenhuma",
        "workModalityHiring": "Ambas"
     }
   },
   {
    "id": 4,
    "selected": false,
    "description": "Não importa o tamanho da sua fome, o Tonolucro está aqui para te ajudar nesse momento de vazio.",
    "photoAvatar": avatarTonolucro,
    "businessCategory": {
        "name": "Tonolucro",
        "state": "Tocantins",
        "city": "Palmas",
        "byBusinessActivity": ["Delivery", "Marketplace"],
        "businessRevenueModel": "Marketplace",
        "businessTargetAudience": ["B2B2C (Business to Business to Consumer)"]
      },
      "softwareDevelopmentCategory": {
         "processDevelopment": ["Agile software development", "Kanban"],
         "timeDevelopment": "Até 6 meses",
         "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
         "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Aumento de produtividade nas entregas", "Ganho de autonomia da equipe e indivíduos", "Capacidade da equipe responder rápido a mudanças no projetos", "Redução de falhas"],
         "methodologyDisadvantages": ["recurso humano"]
      },
     "languageCategory": {
        "languageSoftware": ["JavaScript", "PHP", "TypeScript"],
       "frameworksFrontend": ["Angular", "JQuery", "React (é considerado um framework dentro de um ecossistema de React)"],
       "frameworksBackend": [".NET Core", "ASP .NET", "Laravel"],
       "testMethodology": ["nenhum"],
       "testUnitaryFrontBack": ["Sentry", "MSTest"],
       "typeArchitectureProject": ["Arquitetura MVC (Model-View-Controller)", "Arquitetura de Microservices", "Arquitetura Monolítica"]
 
     },
     "professionalCategory": {
        "timeBusiness": "Entre 1 e 3 anos",
        "LevelProfessionalTechnology": "Difícil (5)",
        "technologyWorkMode": "Remoto",
        "menSize": "entre 5 e 10 profissionais",
        "girlSize": "Nenhuma",
        "workModalityHiring": "CLT (Consolidação das Leis Trabalhistas)"
     }
   },
   {
     "id": 5,
     "selected": false,
     "description": "",
     "photoAvatar": avatarDefault,
     "businessCategory": {
        "name": "Upanda",
        "state": "Tocantins",
        "city": "Araguaina",
        "byBusinessActivity": ["Delivery"],
        "businessRevenueModel": "Software como Serviço (SaaS)",
        "businessTargetAudience": ["B2B (Business to Business)"]
      },
      "softwareDevelopmentCategory": {
         "processDevelopment": ["Scrum"],
         "timeDevelopment": "Entre 6 meses e 1 ano",
         "implementProjectAdapter": "Implementada por completo nos projetos",
         "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Aumento de produtividade nas entregas", "Aumento de qualidade nas entregas", "Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos", "Redução de falhas"],
         "methodologyDisadvantages": ["Nenhuma"]
      },
     "languageCategory": {
       "languageSoftware": ["JavaScript","Python", "TypeScript"],
       "frameworksFrontend": ["React (é considerado um framework dentro de um ecossistema de React)"],
       "frameworksBackend": ["Django"],
       "testMethodology": ["TDD (Test-driven Development)"],
       "testUnitaryFrontBack": ["Cypress"],
       "typeArchitectureProject": ["Arquitetura Monolítica"]
     },
     "professionalCategory": {
        "timeBusiness": "Entre 1 e 3 anos",
        "LevelProfessionalTechnology": "Extremamente difícil (10)",
        "technologyWorkMode": "Remoto",
        "menSize": "até 5 profissionais",
        "girlSize": "Nenhuma",
        "workModalityHiring": "Ambas"
     }
   }
 ]