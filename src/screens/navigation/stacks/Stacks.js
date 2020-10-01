import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Data from 'scenes/data'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import { View } from 'react-native'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}
const HeaderRight = () => <View></View>
export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight: <HeaderRight />,
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const DataNavigator = createStackNavigator({
  Data: {
    screen: Data,
    navigationOptions: ({ navigation }) => ({
      title: 'Input Data',
      headerRight: <HeaderRight />,
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerRight: <HeaderRight />,
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})
