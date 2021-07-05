import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainScreen from '../screens/MainScreen';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

return(
  
    <Drawer.Navigator drawerStyle={{
          backgroundColor: '#111',
        }}
        drawerContentOptions={{
          activeTintColor: 'white', /* font color for active screen label */
          activeBackgroundColor: 'grey', /* bg color for active screen */
          inactiveTintColor: 'grey', /* Font color for inactive screens' labels */
        }} >
        <Drawer.Screen name="Home" component={MainScreen} options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
                <Icon
                    name="home"
                    size={size}
                    color={focused ? 'black' : '#ccc'}
                />
            ),
            }}/>
    </Drawer.Navigator>
);
}

const Stack = createStackNavigator();

const MainNavigator = () => {
    
    const title='Main Screen';
    const menu = <Icon name='bars' size={20}/>;
    const profile = <Icon name='user' size={20}/>;

    return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen 
                name="MainScreen" 
                component={DrawerNavigator} 
                options={({navigation}) => {
                return {
                    headerLeft: () => (
                    <View style={styles.header}>
                    <TouchableOpacity 
                    onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                    {menu}
                    </TouchableOpacity>
                    </View>
                    ),
                    headerRight: () => (
                    <View style={styles.headerright}>
                    <TouchableOpacity 
                    onPress={() => {navigation.navigate('Profile')}}>
                    {profile}
                    </TouchableOpacity>
                    </View>
                    )
                };
                }}
                />
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  header:{
    marginLeft:10
    },
    headerright: {
        marginRight:20
    }
})
export default MainNavigator;