import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

class HorizontalBarChartWithYAxis extends React.PureComponent {

    render() {

      

        const data = [
            {
                value: 50,
                label: 'One',
            },
            {
                value: 10,
                label: 'Two',
            },
            {
                value: 40,
                label: 'Three',
            },
            {
                value: 95,
                label: 'Four',
            },
            {
                value: 85,
                label: 'Five',
            },
        ]
        console.log(data)


        return (
            <View style={{ flexDirection: 'row', height: 220, paddingVertical: 0 }}>
               <YAxis
                  data={data}
                  yAccessor={({ index }) => index}
                  scale={scale.scaleBand}
                  contentInset={{ top: 10, bottom: 10 }}
                  spacing={0.2}
                  formatLabel={(_, index) => data[ index ].label}
               />
               <BarChart
                  style={{ flex: 1, marginLeft: 8 }}
                  data={data}
                  horizontal={true}
                  yAccessor={({ item }) => item.value}
                  svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                  contentInset={{ top: 10, bottom: 10 }}
                  spacing={0.2}
                  gridMin={0}

               >
                 <Grid direction={Grid.Direction.VERTICAL}/>
               </BarChart>
            </View>
        )
    }

}

export { HorizontalBarChartWithYAxis }