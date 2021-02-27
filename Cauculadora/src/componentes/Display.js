import React from 'react'
import { View, Text, Stylesheet, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    display: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1

    },
    displayValue: {
        color: '#fff',
        fontSize: 60

    }
})
export default props => {

    return(
        <View style={styles.display}>
            <Text style={styles.displayValue}>{props.tela}</Text>
        </View>
    )
}