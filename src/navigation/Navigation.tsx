// react
import React, { useContext, useEffect } from "react"
// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// navigation
// screens
import Home from "../screens/Home"

// chatAi
const Navigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Stack.Navigator initialRouteName={"Home"}>
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animation: "fade",
            title: "Home",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
