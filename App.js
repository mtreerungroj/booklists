import React from 'react'
import { StyleSheet, Text, View, ListView } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import BookList from './components/BookList'
import Book from './components/Book'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#2980b9' }}>
          <Scene key='pageOne' component={BookList} title='Book Lists' initial />
          <Scene key='book' component={Book} title='Detail' />
        </Scene>
      </Router>
    )
  }
}
