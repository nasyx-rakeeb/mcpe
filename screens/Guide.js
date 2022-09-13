import {View, Text, StyleSheet, ScrollView} from "react-native"
import colors from "../constants/colors.js"

const Guide = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <Text style={styles.txt}>When you click on download button, you will be asked to open the browser and when the browser opens the shader file will start downloading. The downloaded shader file will be in .zip or .mcpack extension. Follow the below instructions according to shader file extension.</Text>
      <Text style={styles.heading}>How to install .mcpack Shader file</Text>
      <Text style={[styles.txt, styles.txt2]}>1) First make sure you've got the latest versions of FX FILE EXPLORER, if not download it from Google Play Store</Text>
      <Text style={[styles.txt, styles.txt2]}>2) Open the FX File Explorer app once you've downloaded the .mcpack shader file </Text>
      <Text style={[styles.txt, styles.txt2]}>3) Go to your Downloads folder </Text>
      <Text style={[styles.txt, styles.txt2]}>4) Find the .mcpack file and click on it, it should open the the minecraft and start importing shader file </Text>
      <Text style={[styles.txt, styles.txt2]}>5) Now create a new world or edit an existing world </Text>
      <Text style={[styles.txt, styles.txt2]}>6) Scroll down in the left sidebar and tap on Resource Packs and apply the shader </Text>
      <Text style={styles.heading}>How to install .zip Shader file</Text>
      <Text style={[styles.txt, styles.txt2]}>1) Find the zip file in your Downloads folder and long-tap on the zip file to select it and then extract it</Text>
      <Text style={[styles.txt, styles.txt2]}>2) [Android 10 and below] Copy or Cut the new folder which was created when you extracted the zip file and paste it in this location: /games/com.mojang/resource_packs. The games folder is located in internal storage </Text>
      <Text style={[styles.txt, styles.txt2]}>2) [Android 11 and above] Copy or Cut the new folder which was created when you extracted the zip file and paste it in this location: /Android/com.mojang.minecraftpe/files/games/com.mojang/resource_packs. </Text>
      <Text style={[styles.txt, styles.txt2]}>3) Start Minecraft </Text>
      <Text style={[styles.txt, styles.txt2]}>4) Create a new world or edit an existing world </Text>
      <Text style={[styles.txt, styles.txt2, styles.txt3]}>5) Scroll down in the left sidebar and tap on Resource Packs and apply the shader</Text>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.dark1,
    padding: 20,
    flex: 1
  },
  heading: {
    color: colors.white,
    fontFamily: "UbuntuBold",
    fontSize: 30,
    marginVertical: 30,
    lineHeight: 40
  },
  txt: {
    fontFamily: "Exo_2",
    lineHeight: 35,
    fontSize: 24,
    color: colors.white
  },
  txt2: {
    lineHeight: 50
  },
  txt3: {
    paddingBottom: 60
  }
})

export default Guide