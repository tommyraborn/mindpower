import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/screen.png")}
    >
      <View style={styles.maintext}>
        <Text style={styles.textmain}>mindpowers</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textmain: {
    width: "100%",
    height: 70,
    color: "#E5DED1",
    fontFamily: "Poppins",
    fontSize: 49,
  },
});

export default WelcomeScreen;
