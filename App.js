import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Btn } from "./src/components/Btn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Animacion Con Animated</Text>
      <Btn title={"Press Me"} />
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
