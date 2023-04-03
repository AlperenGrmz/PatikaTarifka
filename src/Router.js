
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleStyle:{color:"#ffa500"},headerTintColor:"#ffa500"}}>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Meals" component={Meals}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;