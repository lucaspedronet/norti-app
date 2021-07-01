const avatarAssinaDoc = require("../assets/assinadoc-02.png");
const avatarDefault = require("../assets/default.png");
const avatarTonolucro = require("../assets/tonolucro.png");
const avatarDeTudo = require("../assets/deTudo.png");
const avatarNeoHabitus = require("../assets/neoHabitus.png");
const avatarMaxData = require("../assets/maxData.png");
const avatarEducaFlix = require("../assets/educaFlix.png");
const avatarMedBrasil = require("../assets/medBrasil.png");
const avatarPedeae = require("../assets/pedeae.png");
const avatarMeuCorte = require("../assets/meuCorte.png");

module.exports = [
   {
      "id": 13,
      "selected": false,
      "description": "CURSOS POR ASSINATURA 24 HORAS POR DIA, ILIMITADOS, COM CERTIFICADO INSTANTÂNEO.",
      "photoAvatar": avatarEducaFlix,
      "businessCategory": {
         "name": "Educa Tecnologia",
         "state": "Pará",
         "city": "Belém",
         "byBusinessActivity": ["Big Data", "CRM", "Desenvolvimento de Software", "Educação", "Esportes", "Finanças", "Games", "Infantil", "Internet", "Meio Ambiente", "Segurança", "Serviços Profissionais", "TIC e Telecom", "Turismo", "Vendas e Marketing"],
         "businessRevenueModel": "Assinatura",
         "businessTargetAudience": ["B2B (Business to Business)", "B2B2C (Business to Business to Consumer)", "B2C (Business to Consumer)", "B2G (Business to Government)", "B2E"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Lean Software Development (LSD)"],
          "timeDevelopment": "Entre 1 e 3 anos",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Entendimento sobre o projeto", "Documentação de fácil compreensão", "Aumento de produtividade nas entregas", "Aumento de qualidade nas entregas", "Ganho de autonomia da equipe e indivíduos", "Redução de falhas"],
          "methodologyDisadvantages": ["Incapacidade da equipe responder rápido a mudanças no projetos"]
       },
       "languageCategory": {
          "languageSoftware": ["Java", "JavaScript", "PHP", "Shell"],
          "frameworksFrontend": ["React (é considerado um framework dentro de um ecossistema de React)", "Flutter"],
          "frameworksBackend": ["CodeIgniter", "Laravel", "NestJS"],
          "testMethodology": ["TDD (Test-driven Development)"],
          "testUnitaryFrontBack": ["Visual Studio Test Professional"],
          "typeArchitectureProject": ["Arquiteturas em camadas"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Entre 3 e 5 anos",
          "LevelProfessionalTechnology": "Muito difícil (7)",
          "technologyWorkMode": "Híbrida",
          "menSize": "até 5 profissionais",
          "girlSize": "Nenhuma",
          "workModalityHiring": "Ambas"
       }
     },
   {
    "id": 101,
    "selected": false,
    "description": "Automatize os processos burocráticos da sua empresa com assinaturas eletrônicas verdadeiramente rápidas, práticas e inteligentes.Tudo com 100% de validade jurídica e segurança!",
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
    "description": "deTudo é uma plataforma online, para divulgação de empresas e criação de canal de vendas a partir do Whatsapp.",
    "photoAvatar": avatarDeTudo,
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
        "businessTargetAudience": ["B2B2C (Business to Business to Consumer)", "B2B (Business to Business)"]
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
     "description": "Um painel operacional com os melhores recursos para o seu estabelecimento, e um catálogo online para seus clientes realizarem pedidos.",
     "photoAvatar": avatarPedeae,
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
   },
   {
      "id": 7,
      "selected": false,
      "description": "Sediada em Palmas, capital do Tocantins, a MaxData surgiu em 2002 com o ideal de transformar a informática numa ferramenta estratégica para o sucesso dos negócios de seus clientes, através de assessoria, implantação, treinamento, suporte e desenvolvimento de soluções inteligentes.",
      "photoAvatar": avatarMaxData,
      "businessCategory": {
         "name": "Maxdata Sistemas",
         "state": "Tocantins",
         "city": "Palmas",
         "byBusinessActivity": ["Desenvolvimento de Software"],
         "businessRevenueModel": "Software como Serviço (SaaS)",
         "businessTargetAudience": ["B2B (Business to Business)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Tradicional"],
          "timeDevelopment": "Acima de 3 anos",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Documentação de fácil compreensão", "Aumento de produtividade nas entregas", "Melhoria na comunicação da equipe", "Capacidade da equipe responder rápido a mudanças no projetos"],
          "methodologyDisadvantages": ["Nenhum"]
       },
       "languageCategory": {
          "languageSoftware": ["C#", "JavaScript", "Delphi"],
          "frameworksFrontend": ["Angular", "React (é considerado um framework dentro de um ecossistema de React)"],
          "frameworksBackend": [".NET Core"],
          "testMethodology": ["Testes de funcionalidades"],
          "testUnitaryFrontBack": ["Nenhum"],
          "typeArchitectureProject": ["Arquiteturas em camadas", "Arquitetura MVC (Model-View-Controller)", "Arquitetura Monolítica"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Entre 3 e 5 anos",
          "LevelProfessionalTechnology": "Muito difícil (7)",
          "technologyWorkMode": "Presencial",
          "menSize": "entre 5 e 10 profissionais",
          "girlSize": "Nenhuma",
          "workModalityHiring": "CLT (Consolidação das Leis Trabalhistas)"
       }
   },
   {
      "id": 8,
      "selected": false,
      "description": "MEU CORTE é um sistema de gestão que pode lhe oferecer tudo isso contando com um sistema disponível no computador e no celular, com o auxílio do nosso app para aumentar sua praticidade.",
      "photoAvatar": avatarMeuCorte,
      "businessCategory": {
         "name": "Meu Corte",
         "state": "Tocantins",
         "city": "Palmas",
         "byBusinessActivity": ["Mobile", "Saúde e beleza"],
         "businessRevenueModel": "Software como Serviço (SaaS)",
         "businessTargetAudience": ["B2B (Business to Business)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Extreme Programming (XP)", "Scrum"],
          "timeDevelopment": "Entre 6 meses e 1 ano",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Aumento de produtividade nas entregas", "Aumento de qualidade nas entregas", "Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos", "Redução de falhas"],
          "methodologyDisadvantages": ["Nenhum"]
       },
       "languageCategory": {
          "languageSoftware": ["PHP", "TypeScript"],
          "frameworksFrontend": ["Ionic"],
          "frameworksBackend": ["CodeIgniter"],
          "testMethodology": ["TDD (Test-driven Development)"],
          "testUnitaryFrontBack": ["Junit"],
          "typeArchitectureProject": ["Arquitetura MVC (Model-View-Controller)", "Arquitetura de Microservices"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Entre 3 e 5 anos",
          "LevelProfessionalTechnology": "Nenhuma (0)",
          "technologyWorkMode": "Híbrida",
          "menSize": "Até 5 profissionais",
          "girlSize": "Nenhuma",
          "workModalityHiring": "PJ (Pessoa Jurídica)"
       }
     },
     {
      "id": 11,
      "selected": false,
      "description": "Através da plataforma web Habitus, ajudamos Rhs de empresas a desenvolver e medir as competências dos colaboradores, oferecendo, além de análises, recomendações em tempo real de ações de melhoria.",
      "photoAvatar": avatarNeoHabitus,
      "businessCategory": {
         "name": "Neo Habitus",
         "state": "Pará",
         "city": "Belém",
         "byBusinessActivity": ["Recursos Humanos"],
         "businessRevenueModel": "Software como Serviço (SaaS)",
         "businessTargetAudience": ["B2B (Business to Business)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Scrum"],
          "timeDevelopment": "Entre 6 meses e 1 ano",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Aumento de produtividade nas entregas", "Aumento de qualidade nas entregas", "Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos", "Capacidade da equipe responder rápido a mudanças no projetos", "Redução de falhas"],
          "methodologyDisadvantages": ["Nenhuma"]
       },
       "languageCategory": {
          "languageSoftware": ["Mysql"],
          "frameworksFrontend": ["Fazemos pelo Figma."],
          "frameworksBackend": ["ASP .NET"],
          "testMethodology": ["TDD (Test-driven Development)"],
          "testUnitaryFrontBack": ["Mock"],
          "typeArchitectureProject": ["Arquiteturas em camadas"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Menos de 1 ano",
          "LevelProfessionalTechnology": "Muito difícil (7)",
          "technologyWorkMode": "Remoto",
          "menSize": "até 5 profissionais",
          "girlSize": "Nenhuma",
          "workModalityHiring": "PJ (Pessoa Jurídica)"
       }
     },
     {
      "id": 12,
      "selected": false,
      "description": "A MedBrasil é uma inovação no segmento de saúde. Tem como objetivo maximizar a experiência dos usuários com consultas e exames médicos por meio de agendamento via aplicativo facilitando assim o acesso da população ao atendimento médico.",
      "photoAvatar": avatarMedBrasil,
      "businessCategory": {
         "name": "MedBrasil",
         "state": "Tocantins",
         "city": "Palmas",
         "byBusinessActivity": ["Saúde e beleza", "Vendas e Marketing"],
         "businessRevenueModel": "SaaS e e-commerce ",
         "businessTargetAudience": ["B2B2C (Business to Business to Consumer)", "B2G (Business to Government)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Nao sei informar"],
          "timeDevelopment": "Acima de 3 anos",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Documentação de fácil compreensão", "Aumento de produtividade nas entregas", "Capacidade da equipe responder rápido a mudanças no projetos"],
          "methodologyDisadvantages": ["Problemas com prazos"]
       },
       "languageCategory": {
          "languageSoftware": ["Nao sei informar"],
          "frameworksFrontend": ["Nao sei informar"],
          "frameworksBackend": ["Nao sei informar"],
          "testMethodology": ["Nao sei informar"],
          "testUnitaryFrontBack": ["Nao sei informar"],
          "typeArchitectureProject": ["Nao sei informar"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Entre 5 e 10 anos",
          "LevelProfessionalTechnology": "Difícil (5)",
          "technologyWorkMode": "Híbrida",
          "menSize": "entre 5 e 10 profissionais",
          "girlSize": "Nenhuma",
          "workModalityHiring": "Ambas"
       }
     },
     {
      "id": 9,
      "selected": false,
      "description": "",
      "photoAvatar": avatarDefault,
      "businessCategory": {
         "name": "Rensoftware",
         "state": "Tocantins",
         "city": "Araguaína",
         "byBusinessActivity": ["Desenvolvimento de Software"],
         "businessRevenueModel": "Software como Serviço (SaaS)",
         "businessTargetAudience": ["B2B (Business to Business)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Extreme Programming (XP)", "Scrum"],
          "timeDevelopment": "Acima de 3 anos",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Entendimento sobre o projeto", "Aumento de produtividade nas entregas", "Aumento de qualidade nas entregas", "Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos", "Capacidade da equipe responder rápido a mudanças no projetos", "Redução de falhas"],
          "methodologyDisadvantages": ["Nenhum"]
       },
       "languageCategory": {
          "languageSoftware": ["C#", "JavaScript", "PHP", "Delphi"],
          "frameworksFrontend": ["Angular, JQuery"],
          "frameworksBackend": [".NET Core", "ASP .NET", "Laravel"],
          "testMethodology": ["BDD (Behavior Driven Development)", "Teste Tradicional"],
          "testUnitaryFrontBack": ["Própria"],
          "typeArchitectureProject": ["Arquiteturas em camadas", "Arquitetura MVC (Model-View-Controller)", "Arquitetura de Microservices"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Acima de 10 anos",
          "LevelProfessionalTechnology": "Difícil (5)",
          "technologyWorkMode": "Presencial",
          "menSize": "entre 10 e 20 profissionais",
          "girlSize": "até 5 profissionais",
          "workModalityHiring": "Ambas"
       }
     },
     {
      "id": 10,
      "selected": false,
      "description": "",
      "photoAvatar": avatarDefault,
      "businessCategory": {
         "name": "Aua",
         "state": "Pará",
         "city": "Belém",
         "byBusinessActivity": ["Desenvolvimento de Software", "Marketplace"],
         "businessRevenueModel": "Marketplace",
         "businessTargetAudience": ["B2B2C (Business to Business to Consumer)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Scrum"],
          "timeDevelopment": "Entre 1 e 3 anos",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Transparência nas atividades realizadas pelo time", "Aumento de produtividade nas entregas", "Melhoria na comunicação da equipe", "Ganho de autonomia da equipe e indivíduos"],
          "methodologyDisadvantages": ["Visão do projeto como um todo"]
       },
       "languageCategory": {
          "languageSoftware": ["JavaScript", "TypeScript"],
          "frameworksFrontend": ["NextJs", "React (é considerado um framework dentro de um ecossistema de React)"],
          "frameworksBackend": ["Express"],
          "testMethodology": ["TDD (Test-driven Development)"],
          "testUnitaryFrontBack": ["Faker", "Jest"],
          "typeArchitectureProject": ["Arquiteturas em camadas", "Arquitetura MVC (Model-View-Controller)", "Arquitetura de Microservices"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Entre 1 e 3 anos",
          "LevelProfessionalTechnology": "Muito difícil (7)",
          "technologyWorkMode": "Remoto",
          "menSize": "até 5 profissionais",
          "girlSize": "Nenhuma",
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
      "id": 6,
      "selected": false,
      "description": "",
      "photoAvatar": avatarDefault,
      "businessCategory": {
         "name": "Cartórios de Protesto",
         "state": "Tocantins",
         "city": "Palmas",
         "byBusinessActivity": ["Desenvolvimento de Software"],
         "businessRevenueModel": "Software como Serviço (SaaS)",
         "businessTargetAudience": ["B2G (Business to Government)"]
       },
       "softwareDevelopmentCategory": {
          "processDevelopment": ["Scrum"],
          "timeDevelopment": "Entre 1 e 3 anos",
          "implementProjectAdapter": "Implementada parcialmente e adaptada aos projetos",
          "methodologyBenefits": ["Entendimento sobre o projeto, Documentação de fácil compreensão"," Melhoria na comunicação da equipe"," Capacidade da equipe responder rápido a mudanças no projetos"],
          "methodologyDisadvantages": ["Problemas com prazos"]
       },
       "languageCategory": {
          "languageSoftware": ["Java"," JavaScript"," PHP"],
          "frameworksFrontend": ["JQuery"," React (é considerado um framework dentro de um ecossistema de React)"],
          "frameworksBackend": ["Laravel"," Wicket"],
          "testMethodology": ["TDD (Test-driven Development)"],
          "testUnitaryFrontBack": ["PhpUnit"],
          "typeArchitectureProject": ["Arquitetura MVC (Model-View-Controller)"]
   
       },
       "professionalCategory": {
          "timeBusiness": "Entre 3 e 5 anos",
          "LevelProfessionalTechnology": "Muito baixa (2)",
          "technologyWorkMode": "Híbrida",
          "menSize": "até 5 profissionais",
          "girlSize": "Nenhuma",
          "workModalityHiring": "Ambas"
       }
   },
 ]