import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import AllExpenses from './screens/AllExpenses'
import ManageExpense from './screens/ManageExpense'
import RecentExpenses from './screens/RecentExpenses'

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTabs.Navigator screenOptions={{}}>
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses}></BottomTabs.Screen>
    <BottomTabs.Screen name='AllExpenses' component={AllExpenses}></BottomTabs.Screen>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='auto'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} options={{ headerShown: false }} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
