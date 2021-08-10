import React from 'react'
import { Text, View } from 'react-native'

const HolamundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'orangered',
            justifyContent: 'center',
            
          }}>
              <Text style={{fontSize: 30, textAlign:'center'}}>
                Helloword
                </Text>
                
          </View>
    )
}

export default HolamundoScreen
