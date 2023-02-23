// App.js
import React from "react"
import { Text, View } from "react-native"
// import "tailwindcss-react-native/types.d"
import { StatusBar } from "expo-status-bar"
import "tailwindcss-react-native/types.d"

import { SafeAreaProvider } from "react-native-safe-area-context"

import Navigation from "./navigation/Navigation"
import { UserProvider } from "./context/UserContext"

import { NativeBaseProvider } from "native-base"
export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </UserProvider>
    </SafeAreaProvider>
  )
}
