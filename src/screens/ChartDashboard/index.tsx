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
      { x: 'TS', y: 38.5, },
      { x: 'SQL', y: 15.4, },
      { x: 'Python', y: 15.4, },
      { x: 'PHP', y: 61.5, },
      { x: 'JS', y: 76.9, },
      { x: 'Java', y: 7.7, },
      { x: 'Dart', y: 15.4, },
      { x: 'Delphi', y: 15.4, },
      { x: 'C#', y: 15.4, },
    ],
    city: [
      { x: 'Araguína', y: 15.4, },
      { x: 'Belém', y: 21.4 },
      { x: 'Palmas', y: 57.1 },
      { x: 'Macapá', y: 7.1 },
    ],
    state: [
      { y: 71.4, x: "Tocantins" },
      { y: 21.4, x: "Pará" },
      { y: 7.1, x: "Amapá" },
    ],
    targetBusiness: [
      { y: 57.1, x: "B2B" },
      { y: 50, x: "B2B2C" },
      { y: 14.3, x: "B2C" },
      { y: 7.1, x: "B2S" },
      { y: 21.4, x: "B2G" },
      { y: 7.1, x: "B2E" },
    ],
    agilePractice: [
      { y: 27.3, x: "XP"},
      { y: 72.7, x: "Scrum",},
      { y: 9.1, x: "ASD"}, 
      { y: 9.1, x: "Kanban"}, 
      { y: 18.2, x: "LSD"},
      { y: 50, x: "B2B2C" },
    ],
  }

  const dataPizza = [
    {
      name: "Amapá",
      population: 7.7,
      color: "rgba(51, 102, 204, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Pará",
      population: 15.4,
      color: "#ff9900",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Tocantins",
      population: 79.9,
      color: "#0099c6",
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
        data={dataPizza}
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
      <VictoryPie
        animate
        data={data.state}
        theme={VictoryTheme.material}
        labels={({ datum }) => `${datum.y}%`}
        style={{ 
          labels: { 
            fontSize: 14
          },
          data: {
            background: "#123",
            placeItems: "#f44"
          }
      }}
      />
        <VictoryLegend 
          x={80}
          centerTitle
          height={100}
          orientation="horizontal"
          theme={VictoryTheme.material}
          gutter={20}
          rowGutter={{ top: 20, bottom: 20 }}
          style={{ border: { stroke: "black" } }}
          data={[
            { 
              name: "Tocantins",
              symbol: {
                fill: "red",
              },
            }, 
            { 
              name: "Pará",
              symbol: {
                fill: "gold",
              },
            }, 
            { 
              name: "Amapá",
              symbol: {
                fill: "green",
              },
            },
          ]}
        />
    </CardChart>

    <CardChart>
      <TitleChart>Cidades</TitleChart>
      <VictoryChart
        domainPadding={{ x: [30, 20], y: [0, 0]  }}
        theme={VictoryTheme.material}
        animate
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
        animate
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.targetBusiness}
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
      <TitleCategory>Desenvolvimento de software e metodologias</TitleCategory>
    </HeaderCategory>

    <CardChart>
      <TitleChart>Qual prática ágil é base para o processo de desenvolvimento?</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [20, 0], y: [0, 0]  }}
        theme={VictoryTheme.material}
        animate
        height={300}
        width={width}
        style={{
          background: {
            fill: "#fff",

          },
          
        }}
      >
        <VictoryBar
          data={data.agilePractice}
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
      <TitleChart>Linguagens</TitleChart>
      <VictoryChart
        horizontal
        domainPadding={{ x: [10, 0], y: [0, 0]  }}
        theme={VictoryTheme.material}
        animate
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
  </Container>
  );
}

export { Dashboard };