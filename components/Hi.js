import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Hi extends React.Component {
  constructor (props) {
    super(props)
    this.state = { beBold: false }
  }

  toggleBold = () => {
    let beBold = !this.state.beBold
    console.log(this.state.beBold)
    this.setState({ beBold: beBold })
  }
  render () {
    return <Text style={this.state.beBold ? styles.bold : styles.notBold} onPress={this.toggleBold}>Hi {this.props.name}</Text>
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  notBold: {}
})

export default Hi
