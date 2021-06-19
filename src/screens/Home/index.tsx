import React from 'react';
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Container, TitleCategory, TitleChart, CardChart, HeaderCategory } from './styles';

const Home: React.FC = ({ route }) => {
  // const { data } = rs
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

  const dataRevenueModel = [
    {
      name: "API",
      population: 7.7,
      color: "rgba(51, 102, 204, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Marketplace",
      population: 15.4,
      color: "#990099",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "SaaS",
      population: 69.2,
      color: "#0099c6",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Outros",
      population: 7.7,
      color: "#109618",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const dataProcessSoftware = [
    {
      name: "Tradicional",
      population: 23.1,
      color: "rgba(51, 102, 204, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Ágil",
      population: 76.9,
      color: "#dc3912",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];

  const dataTimeProcessSoftware = [
    {
      name: "Até 6 meses",
      population: 20,
      color: "rgba(51, 102, 204, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "Entre 6 meses e 1 ano",
      population: 30,
      color: "#dc3912",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Entre 1 e 3 anos",
      population: 30,
      color: "#ff9900",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "Acima de 3 anos",
      population: 20,
      color: "#109618",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
  ];

  const { width } = Dimensions.get("window");
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

  const dataBar = {
    labels: ["Araguaína", "Belém", "Macapá", "Palmas"],
    datasets: [
      {
        data: [15.4, 15.4, 7.7, 61.5]
      }
    ]
  };

  const dataProcess = {
    labels: ["XP", "Scrum", "ASD", "Kanban", "LSD"],
    datasets: [
      {
        data: [3, 8, 1, 1, 1]
      }
    ]
  };

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
      <BarChart
        data={dataBar}
        width={width - 32}
        height={220}
        chartConfig={chartConfig}
        showValuesOnTopOfBars
        showBarTops
        fromZero
        flatColor
        withVerticalLabels
        hidePointsAtIndex={[]}
        withInnerLines={false}
        fromNumber={1}
        segments={3}
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
      />
    </CardChart>

    <CardChart>
      <TitleChart>Modelo de receita</TitleChart>
      <PieChart
        data={dataRevenueModel}
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

    
    <HeaderCategory>
      <TitleCategory>Desenvolvimento de software e metodologias</TitleCategory>
    </HeaderCategory>

    <CardChart>
      <TitleChart>Qual o estilo do processo de desenvolvimento de software adotado pela empresa na maioria dos projetos?</TitleChart>
      <PieChart
        data={dataProcessSoftware}
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
      <TitleChart>Qual prática ágil é base para o processo de desenvolvimento?</TitleChart>
      <BarChart
        data={dataProcess}
        width={width - 32}
        height={220}
        chartConfig={chartConfig}
        showValuesOnTopOfBars
        showBarTops
        fromZero
        flatColor
        withVerticalLabels
        hidePointsAtIndex={[]}
        withInnerLines={false}
        
        style={{
          paddingHorizontal: 0,
          paddingVertical: 16,
        }}
      />
    </CardChart>
    
    <CardChart>
      <TitleChart>Quanto tempo de adesão à prática de desenvolvimento de software?</TitleChart>
      <PieChart
        data={dataTimeProcessSoftware}
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

  </Container>
  );
}

export { Home};