import {Pressable, Text, StyleSheet} from "react-native"
import colors from "../constants/colors.js"

const Button = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      {
        opacity: pressed
          ? .7
          : 1
      },
      styles.btn
    ]}>
      <Text style={styles.btnTxt}>{title}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.dark3,
    borderRadius: 50,
    paddingVertical: 5
  },
  btnTxt: {
    textAlign: "center",
    color: colors.dark2,
    fontSize: 18,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "UbuntuMedium"
  }
})

export default Button