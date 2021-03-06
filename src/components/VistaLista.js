import React from 'react';
import { View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardSerie from './CardSerie';
import { Text } from 'galio-framework';


const VistaLista = ({title,selectSeries,lista})=><View style={{height:240,backgroundColor:'#00000090',marginTop:10,borderRadius:5,marginStart:5,marginEnd:5}}>
    
    <Text style={{marginTop:10,marginLeft:20,fontSize:22,color:'#eeeeee'}}>{ title}</Text>
    <ScrollView
        horizontal
        style={{position:'absolute',height:190,backgroundColor:'#00000060',left:2,right:2,top:40,borderRadius:5,marginStart:10,marginEnd:10}}
        viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }}
    >
        {lista.map(item=>(<CardSerie item={item} key={item.id} selectSeries={selectSeries} />))}
    </ScrollView>
</View>;

export default VistaLista;