import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator, DataNavigator } from '../stacks'

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Home' },
    },
    DataTab: {
      screen: DataNavigator,
      navigationOptions: { title: 'Input Data' },
    },
    ProfileTab: {
      screen: ProfileNavigator,
      navigationOptions: { title: 'Profile' },
    },
   
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'HomeTab':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'DataTab':
              return (
              <FontIcon
                name="plus-circle"
                color={focused ? colors.lightPurple : colors.lightRed}
                size={25}
                solid
              />
            )
          case 'ProfileTab':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
        style: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        },
      },
      swipeEnabled: false,
    }),
  },
)

export default TabNavigator
