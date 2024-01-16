import { ActivityIndicator, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="dodgerblue"/>
        <Text>Hello there</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    }
})