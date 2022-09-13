import {View, Text, StyleSheet, Pressable, FlatList, Image} from "react-native"
import colors from "../constants/colors.js"
import Button from "./Button.js"
import {useNavigation} from '@react-navigation/native'

const Card = ({data}) => {
  const navigation = useNavigation()
  
  const renderData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.top}>
          <Image style={styles.img} source={{uri: item.img}} />
        </View>
        <View intensity={30} style={styles.bottom}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.btnBox}>
            <Button onPress={() => navigation.navigate("Shader Details", {img: item.img, img2: item.img2, img3: item.img3, title: item.title, desc: item.desc, downloadUrl: item.downloadUrl})} title="Details" />
          </View>
        </View>
      </View>
      )
  }
  
  return <FlatList data={data} renderItem={renderData} />
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.dark2,
    flex: 1,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20
  },
  bottom: {
    height: 90,
    justifyContent: "space-evenly"
  },
  img: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  cardTitle: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    paddingVertical: 5,
    fontFamily: "UbuntuBold"
  },
  btnBox: {
    paddingHorizontal: 40,
    paddingBottom: 5
  }
})

export default Card