import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {pages} from './constants';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator>
      {pages.map(({pageName, component}) => {
        return <Stack.Screen name={pageName} component={component} />;
      })}
    </Stack.Navigator>
  );
}
export default NavigationStack;
