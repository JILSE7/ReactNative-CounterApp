import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'


//iNTERFACE
interface Props {
    title: string;
    onPress: () => void;
    position?:  'br'| 'bl'; //opcional
}




const FAB = ({title, onPress, position} : Props) => {

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={0.5} style={[styles.TouchableOpacity, (position=== 'br') ? styles.rigth : styles.left]}  onPress={onPress}>
          
                <View style={styles.button}>
                    <Text style={styles.textFab}>{title}</Text>
                </View>
        </TouchableOpacity>
        )
    }
    
    const android = () => {
        return (
            <View style={[styles.TouchableOpacity, (position=== 'br') ? styles.rigth : styles.left]}  >
            <TouchableNativeFeedback  onPress={onPress} background={TouchableNativeFeedback.Ripple('orangered' , false, 30)}>
                <View style={styles.button}>
                    <Text style={styles.textFab}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        )
    }
    
    return (Platform.OS ===  'ios') ? ios() : android();
}

export default FAB;

const styles = StyleSheet.create({

    button: {
      alignItems: "center",
      backgroundColor: "orange",
      justifyContent: 'center',
      borderRadius: 100,
      padding: 10,
      width: 60,
      height: 60,
      marginTop: 10,
      shadowColor: "red",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 8,
    },
    TouchableOpacity:{
        position:'absolute',
        bottom: 15,
        
        
    },
    rigth : {
        right: 15
    },
    left : {
        left: 15
    },
    textFab: {
        alignSelf:'center',
        fontSize: 25

    }

  });
