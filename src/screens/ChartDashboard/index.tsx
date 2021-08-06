import React from 'react';
import { Dimensions } from 'react-native'
import { 
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryContainer,
  VictoryPie,
  VictoryAxis,
  VictoryScatter,
  VictoryLegend,
} from "victory-native";

import { PieChart } from "react-native-chart-kit";
import { theme } from '../../globals/styles/theme';
import { Container, TitleCategory, TitleChart, CardChart, HeaderCategory } from './styles';

const Dashboard: React.FC = ({ route }) => {
  const { width } = Dimensions.get("screen");
  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(51, 102, 204, 1)`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    langues: [
      { x: 'SQL', y: 7.1, },
      { x: 'Python', y: 14.3, },
      { x: 'TypeScript', y: 35.7, },
      { x: 'PHP', y: 64.3, },
      { x: 'JavaScript', y: 78.6, },
      { x: 'Java', y: 14.3, },
      { x: 'Shell', y: 7.1, },
      { x: 'Dart', y: 7.1, },
      { x: 'Delphi', y: 14.3, },
      { x: 'C#', y: 14.3, },
    ],
    city: [
      { x: 'Araguaína', y: 15.4, },
      { x: 'Belém', y: 21.4 },
      { x: 'Palmas', y: 57.1 },
      { x: 'Macapá', y: 7.1 },
    ],
    state: [
      { y: 71.4, x: "Tocantins" },
      { y: 21.4, x: "Pará" },
      { y: 7.1, x: "Amapá" },
    ],
    businessTargetAudience: [
      { y: 57.1, x: "B2B" },
      { y: 50, x: "B2B2C" },
      { y: 14.3, x: "B2C" },
      { y: 7.1, x: "B2S" },
      { y: 21.4, x: "B2G" },
      { y: 7.1, x: "B2E" },
    ],
    processDevelopment: [
      { y: 27.3, x: "Extreme\nProgramming"},
      { y: 72.7, x: "Scrum",},
      { y: 9.1, x: "Agile Software\nDevelop"}, 
      { y: 9.1, x: "Kanban"}, 
      { y: 18.2, x: "Lean Software\nDevelop"},
    ],
    methodologyBenefits: [
      { y: 63.6, x: "Transparência nas\natividades"},
      { y: 72.7, x: "Entendimento\nsobre Projeto",},
      { y: 18.2, x: "Uso de Artefatos"},
      { y: 9.1, x: "Uso de Diagramas"}, 
      { y: 27.3, x: "Uso de\nDocumentação"},
      { y: 90.9, x: "Ganho de\nAutonomia da equipe" },
      { y: 63.6, x: "Redução de\nFalhas" },
      { y: 72.7, x: "Melhoras na\ncomunicação" },
      { y: 45.5, x: "Aumento nas\nEntregas" },
    ],
    methodologyDisadvantages: [ 
      { y: 54.5, x: "Nenhuma"}, 
      { y: 18.2, x: "Problemas com\nprozos"},
      { y: 9.1, x: "Recurso Humano"},
      { y: 9.1, x: "Responder as\nmudanças de projeto"},
      { y: 9.1, x: "Visão do Projeto",},
    ],
    frameworksFrontend: [ 
      { y: 28.6, x: "Angular"}, 
      { y: 21.4, x: "JQuery"},
      { y: 57.1, x: "ReactJS"},
      { y: 7.1, x: "Figma",},
      { y: 7.1, x: "VueJS",},
      { y: 14.3, x: "Flutter"},
      { y: 7.1, x: "Bootstrap",},
      { y: 7.1, x: "Ionic",},
    ],
    frameworksBackend: [ 
      { y: 7.1, x: "Django"},
      { y: 7.1, x: "Express"},
      { y: 21.4, x: "NET Core"}, 
      { y: 21.4, x: "ASP .NET"},
      { y: 14.3, x: "CodeIgniter"},
      { y: 35.7, x: "Laravel"},
      { y: 7.1, x: "Próprio"},
      { y: 7.1, x: "NestJS"},
      { y: 7.1, x: "Nenhum"},
      { y: 7.1, x: "Wicket"}
    ],
    testMethodology: [ 
      { y: 50, x: "TDD Test-Driven Develop"},
      { y: 7.1, x: "Behavior Driven Develop"},
      { y: 42.9, x: "Nenhum"},
    ],
  }

  const stateData = [
    {
      name: "Amapá",
      population: 7.7,
      color: `${theme.uiColors['info-default']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Pará",
      population: 15.4,
      color: `${theme.uiColors['amarelo']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Tocantins",
      population: 79.9,
      color: `${theme.uiColors['success-default']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const processDevelopmentData = [
    {
      name: "API",
      population: 1,
      color: `${theme.uiColors['azul-2']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Assinatura",
      population: 1,
      color: `${theme.uiColors['amarelo']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Marketplace",
      population: 2,
      color: `${theme.uiColors['roxo']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "SaaS e E-Commerce",
      population: 1,
      color: `${theme.uiColors['verder']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "SaaS",
      population: 9,
      color: `${theme.uiColors['azul']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const timeDevelopment = [
    {
      name: "Até 6 meses",
      population: 2,
      color: `${theme.uiColors['azul-2']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Entre 6 meses e 1 ano",
      population: 3,
      color: `${theme.uiColors['amarelo']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Entre 1 e 3 anos",
      population: 4,
      color: `${theme.uiColors['roxo']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Acima de 3 anos",
      population: 2,
      color: `${theme.uiColors['verder']}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  return (
  <Container>
    <HeaderCategory>
      <TitleCategory>Caracterização das empresas</TitleCategory>
    </HeaderCategory>
    
    <CardChart>
      <TitleChart>Estado</TitleChart>
      <PieChart
        data={stateData}
        width={width - 32}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 0]}
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
      />
    </CardChart>

    <CardChart>
      <TitleChart>Cidades</TitleChart>
      <VictoryChart
        domainPadding={{ x: [30, 20], y: [0, 0]  }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.city}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={40}
          labelComponent={
            <VictoryLabel
              dy={15}
              dx={-15}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
      </VictoryChart>
    </CardChart>

    <CardChart>
      <TitleChart>Qual público alvo da empresa?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [20, 0], y: [0, 0]  }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.businessTargetAudience}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={25}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>

    <CardChart>
      <TitleChart>Qual é o modelo de receita da empresa?</TitleChart>
      <PieChart
        data={processDevelopmentData}
        width={width - 32}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"-30"}
        center={[30, 0]}
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
      />
    </CardChart>
    
    <HeaderCategory>
      <TitleCategory>Desenvolvimento de software e metodologias</TitleCategory>
    </HeaderCategory>

    <CardChart>
      <TitleChart>Qual prática ágil é base para o processo de desenvolvimento?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [20, 0], y: [0, 0]  }}
        padding={{ top: 40, right: 10, bottom: 40, left: 90 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",
          },
        }}
      >
        <VictoryBar
          data={data.processDevelopment}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={20}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>
    
    <CardChart>
      <TitleChart>Quanto tempo de adesão à prática de desenvolvimento de software?</TitleChart>
      <PieChart
        data={timeDevelopment}
        width={width - 32}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"-30"}
        center={[30, 0]}
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
      />
    </CardChart>

    <CardChart>
      <TitleChart>Ao adotar metodologias ágeis nos projetos de software, quais foram os benefícios alcançados?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [20, 0], y: [0, 0]  }}
        padding={{ left: 120, right: 0, bottom: 40, top: 20 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.methodologyBenefits}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={15}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>
    
    <CardChart>
      <TitleChart>Ao adotar metodologias ágeis nos projetos de software, quais foram as desvantagens?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [20, 0], y: [0, 0]  }}
        padding={{ left: 120, right: 10, bottom: 40, top: 40 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.methodologyDisadvantages}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={25}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>
    
    <HeaderCategory>
      <TitleCategory>Linguagens, frameworks, cloud computing e ferramentas</TitleCategory>
    </HeaderCategory>
    
    <CardChart>
      <TitleChart>Linguagens</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [10, 0], y: [0, 0]  }}
        padding={{ top: 40, right: 10, bottom: 40, left: 70 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.langues}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={15}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>
    
    <CardChart>
      <TitleChart>A empresa utiliza algum destes frameworks frontend em seus projetos?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [10, 0], y: [0, 0]  }}
        padding={{ top: 40, right: 10, bottom: 40, left: 70 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.frameworksFrontend}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={15}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>

    <CardChart>
      <TitleChart>A empresa utiliza algum destes frameworks backend em seus projetos?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [10, 0], y: [0, 0]  }}
        padding={{ top: 40, right: 10, bottom: 40, left: 70 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.frameworksBackend}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={15}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>

    <CardChart>
      <TitleChart>Qual metodologia de teste é utilizada pela empresa?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [10, 0], y: [0, 0]  }}
        padding={{ left: 90, top: 40, right: 10, bottom: 40 }}
        theme={VictoryTheme.material}
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.testMethodology}
          labels={({ datum }) => `${datum.y}%`}
          barWidth={35}
          labelComponent={
            <VictoryLabel
              dx={-30}
              textAnchor="start"
              backgroundPadding={[
                { left: 0, right: 0 },
              ]}
              backgroundStyle={[
                { fill: "blue", opacity: 0 }
              ]}
            />
          }
          style={{
            data: { 
              fill: "#0497f9",
              width: 15
            },
            labels: { 
              fontSize: 11,
              fill: "#f2fafc",
            }
          }}
        />
        
      </VictoryChart>
    </CardChart>
  </Container>
  );
}

export { Dashboard };