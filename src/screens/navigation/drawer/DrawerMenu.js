import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text,Image } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors,images } from 'theme'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu :{
    fontSize: 20,
    paddingTop: 15,
    
  },
  logo: {
    width: 52,
    height: 52,
  },
}

const HeaderTitle = () => <Image source={images.logo_sm} style={styles.logo} />
const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.header}>
    <HeaderTitle/>
    </View>
    <View style={styles.main}>
       
      <Text style={styles.menu}>Home</Text>
      <Text style={styles.menu}>Data Relawan</Text>
      <Text style={styles.menu}>Pengaturan</Text>
      <Text style={styles.menu}>Logout</Text>
      
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
