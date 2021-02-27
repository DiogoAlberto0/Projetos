import React from 'react'
import { TouchableHighlight, Text, Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    botao: {
        fontSize: 40,
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        color: 'rgb(0,0,0)',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#888'

    },
    operation: {
        backgroundColor: '#fa8231',
        color: '#fff'

    },
    duplo: {
        width: (Dimensions.get('window').width / 4 * 2)
    },
    triplo:{
        width: (Dimensions.get('window').width / 4 * 3)

    }
})

export default props => {
    const estiloBotao = [styles.botao]
    if(props.duplo) estiloBotao.push(styles.duplo)
    if(props.operation) estiloBotao.push(styles.operation)
    if(props.triplo) estiloBotao.push(styles.triplo)
    return(
            <TouchableHighlight onPress={() => props.onClick(props.valorBotao)}>
                <Text style={estiloBotao}>{props.valorBotao}</Text>
            </TouchableHighlight>
    )
}
