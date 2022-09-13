import {View, Text, StyleSheet, Image, ScrollView} from "react-native"
import colors from "../constants/colors.js"
import Button from "../components/Button.js"
import {useEffect} from "react"
import * as Linking from "expo-linking"

const ShaderDetails = ({route, navigation}) => {
 
 useEffect(() => {
   navigation.setOptions({title: route.params.title})
 }, [navigation])
 
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <Image source={{uri: route.params.img}} style={styles.img} />
      {route.params.img2 && <Image source={{uri: route.params.img2}} style={styles.img} />}
      {route.params.img3 && <Image source={{uri: route.params.img3}} style={styles.img} />}
      <Text style={styles.heading}>{route.params.title}</Text>
      <Text style={styles.desc}>{route.params.desc}</Text>
      <Button onPress={() => navigation.navigate("How To Apply Shader")} title="How to apply this shader" />
      <View style={styles.btn}>
        <Button onPress={() => Linking.openURL(route.params.downloadUrl)} title="Download" />
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.dark1,
    padding: 20
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 30,
    marginBottom: 15
  },
  heading: {
    color: colors.white,
    fontFamily: "UbuntuBold",
    fontSize: 30,
    marginTop: 15,
    marginBottom: 30
  },
  desc: {
    color: colors.white,
    marginBottom: 30,
    lineHeight: 35,
    fontFamily: "Exo_2",
    fontSize: 24
  },
  btn: {
    marginTop: 15,
    marginBottom: 60
  }
})

export default ShaderDetails