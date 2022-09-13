import {View, Text, StyleSheet, ScrollView} from "react-native"
import colors from "../constants/colors.js"
import Card from "../components/Card.js"

const Home = ({route}) => {
  return (
    <View style={styles.root}>
      <Card data={route.params.data} />
    </View>
    )
}

const styles = StyleSheet.create({
root: {
  flex: 1,
  backgroundColor: colors.dark1,
  paddingTop: 20
}
})

export default Home