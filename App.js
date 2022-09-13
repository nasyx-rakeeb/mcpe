import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View, Alert, BackHandler} from 'react-native'
import Home from "./screens/Home.js"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import colors from "./constants/colors.js"
import {useFonts} from 'expo-font'
import ShaderDetails from "./screens/ShaderDetails.js"
import Guide from "./screens/Guide.js"
import {useEffect, useState} from "react"
import axios from "axios"

const Stack = createNativeStackNavigator()
let appVersion = 1

const App = () => {
  
  const [data, setData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://minecraft-backend-1.herokuapp.com/")
        if (appVersion !== res.data.serverVersion) {
            return Alert.alert("UPDATE AVAILABLE", "An update is available on the play store, please update your app or else it won't run.", [{text: "Exit", onPress: () => {BackHandler.exitApp()}}])
         }
        if (res.status === 200) {
          setData(res.data.data)
        } else {
          return Alert.alert("ERROR", "An error occurred while fetching data. Check your internet connection or restart the app. If the problem persists please let us know")
        }
      } catch (error) {
        Alert.alert("ERROR", "An error occurred while fetching data. Check your internet connection or restart the app. If the problem persists please let us know")
        console.log(error)
      }
    }
    getData()
  }, [])

  const [fontsLoaded] = useFonts({
    "Exo_2": require("./assets/fonts/Exo_2/Exo_2.ttf"),
    "UbuntuRegular": require("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    "UbuntuMedium": require("./assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    "UbuntuBold": require("./assets/fonts/Ubuntu/Ubuntu-Bold.ttf")
  })
  
  if(!fontsLoaded || !data) {
    return null
  }

  return (
    <NavigationContainer style={styles.root}>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: colors.dark2}, headerTintColor: colors.white, headerTitleAlign: "center"}}>
        <Stack.Screen name="MCPE 1.19 SHADERS" component={Home} options={{headerTitleStyle: {fontFamily: "UbuntuBold", fontSize: 24}}} initialParams={{data: data}} />
        <Stack.Screen name="Shader Details" component={ShaderDetails} options={{headerTitleStyle: {fontFamily: "UbuntuBold", fontSize: 24}}} />
        <Stack.Screen name="How To Apply Shader" component={Guide} options={{headerTitleStyle: {fontFamily: "UbuntuBold", fontSize: 24}}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.dark1
  }
})

export default App