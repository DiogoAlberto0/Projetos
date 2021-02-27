import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Botao from './componentes/Botao'
import Display from './componentes/Display'

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})


const inicialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}
export default class App extends Component {

  state = {...inicialState}
  addDigit = n => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return false
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay:false})

    if(n !== '.') {
      const newValue = this.state.displayValue
      const values = [this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }

  }
  clearMemory = () => {
    this.setState({...inicialState})
  }
  setOperation = (operation) => {
    if(this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true})
    } else {
      const equals = this.state.operation === '='
      const values = [this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e){
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values
      })


    }
  }

  render() {

    return(
      <View style={styles.container}>

        <Display tela={this.state.displayValue} />
        <View style={styles.botoes}>
          <Botao valorBotao={'AC'} onClick={this.clearMemory} triplo/>
          <Botao valorBotao={'/'} onClick={this.setOperation} operation/>
          <Botao valorBotao={'7'} onClick={this.addDigit}/>
          <Botao valorBotao={'8'} onClick={this.addDigit}/>
          <Botao valorBotao={'9'} onClick={this.addDigit}/>
          <Botao valorBotao={'*'} onClick={this.setOperation} operation/>
          <Botao valorBotao={'4'} onClick={this.addDigit}/>
          <Botao valorBotao={'5'} onClick={this.addDigit}/>
          <Botao valorBotao={'6'} onClick={this.addDigit}/>
          <Botao valorBotao={'-'} onClick={this.setOperation} operation/>
          <Botao valorBotao={'1'} onClick={this.addDigit}/>
          <Botao valorBotao={'2'} onClick={this.addDigit}/>
          <Botao valorBotao={'3'} onClick={this.addDigit}/>
          <Botao valorBotao={'+'} onClick={this.setOperation} operation/>
          <Botao valorBotao={'0'} onClick={''} duplo/>
          <Botao valorBotao={'.'} onClick={''}/>
          <Botao valorBotao={'='} onClick={this.setOperation} operation/>
        </View>
      </View>
      
    )
  }
}