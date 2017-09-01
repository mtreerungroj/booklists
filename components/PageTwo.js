import React from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class PageTwo extends React.Component {
  render () {
    return (
      <View style={{ margin: 128 }}>
        <Text>This is Book details: </Text>
        <Text>{this.props.bookId}</Text>
      </View>
    )
  }
}
