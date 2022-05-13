import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../../components/AppHeaderIcon'

export const AboutScreen = ({}) => {
    return (
      <View style={styles.center}>
        <Text>AboutScreen</Text>
      </View>
    )
  }
  
  AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Создать пост',
    
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Toggle Drawer'
          iconName='ios-menu'
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  })
  
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  