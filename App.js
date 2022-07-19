import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Btn } from "./src/components/Btn";
import { Sequence } from "./src/components/Sequence";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>RN Con Animated</Text>
      <Btn title={"Press Me"} />
      <Sequence>
        <FontAwesome name="soccer-ball-o" size={50} color={"black"} />
      </Sequence>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
