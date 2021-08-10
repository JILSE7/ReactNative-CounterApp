import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FAB from '../Components/FAB'



const CounterScreen = () => {

                const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container} >
            <Text style={{textAlign: 'center', fontSize:45, color: 'black', top:-50}}>Contador : {counter}</Text>
             {/* <TouchableOpacity style={styles.button} onPress={() =>setCounter(counter-1)}><Text>{title}</Text></TouchableOpacity>  */}

             <FAB title='-1' onPress= {() => setCounter(counter  - 1)} position='bl'/>
             <FAB title='+1' onPress= {() => setCounter(counter + 1)} position='br'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, //toma todo el spacio disponible
        backgroundColor: 'orangered',
        justifyContent:'center',
        
    }
    

  });

export default CounterScreen
