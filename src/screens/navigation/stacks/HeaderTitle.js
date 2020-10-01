import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { images } from 'theme'

const HeaderTitle = () => 
<View style={styles.centerLogo}>
  <Image 
    source={images.logo_lg} 
    style={styles.logo}
    resizeMode="contain"
   />
  </View>

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}
const styles = StyleSheet.create({
  logo: {
    width: 98,
    height: 32,
  },
  centerLogo:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
   
  },
})

export default HeaderTitle
