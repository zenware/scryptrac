import React from 'react';
import { Asset, AppLoading } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import { Container } from 'native-base';

//  About: { screen: AboutScreen }, /
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  })

export default class App extends React.Component {
  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontsAreLoaded: true})
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />
    }
    return (
        <AppNavigator />
    ); 
  }
}


