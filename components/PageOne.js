import React from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class PageOne extends React.Component {
  render () {
    const goToPageTwo = () => Actions.pageTwo({ text: 'Hello world!' })
    return (
      <View style={{ margin: 128 }}>
        <Text onPress={goToPageTwo}>This is PageOne!</Text>
      </View>
    )
  }
}
