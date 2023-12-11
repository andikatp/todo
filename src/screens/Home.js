import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/img1.png")} />
      <Text style={styles.title}>
        Ways <Text style={styles.redText}>To</Text>
        <Text style={styles.orangeText}>DO</Text>
      </Text>
      <Text style={styles.subtitle}>
        Write your activity and finish your activity.
      </Text>
      <Text style={styles.description}>Fast, Simple and Easy to Use.</Text>

      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.registerButton}
          onPress={() => navigation.navigate("RegisterPage")}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
  redText: {
    color: "#B82020",
  },
  orangeText: {
    color: "#FF5555",
  },
  subtitle: {
    marginTop: 10,
  },
  description: {
    marginTop: 5,
  },
  buttonsContainer: {
    marginTop: 30,
    width: "80%",
  },
  loginButton: {
    backgroundColor: "#FF5555",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#575859",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default HomeScreen;
