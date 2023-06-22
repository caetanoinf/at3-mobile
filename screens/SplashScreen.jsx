import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://avatars.githubusercontent.com/u/24965137?s=200&v=4" }} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
