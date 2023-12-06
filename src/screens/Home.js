import React from "react";
import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../assets/img1.png")}
        />
        <Text style={{ fontSize: "50px", fontWeight: "bold" }}>
          Ways <Text style={{ color: "#B82020" }}>To</Text>
          <Text style={{ color: "#FF5555" }}>DO</Text>
        </Text>
        <Text style={{ marginTop: "1rem" }}>
          Write your activity and finish your activity.
        </Text>
        <Text>Fast, Simple and Easy to Use.</Text>
      </View>
      <View style={{ marginTop: "3rem" }}>
        <Pressable
          style={{
            backgroundColor: "#FF5555",
            marginHorizontal: 60,
            padding: 9,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            LOGIN
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#575859",
            marginHorizontal: 60,
            padding: 9,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
            onPress={() => navigation.navigate("RegisterPage")}
          >
            REGISTER
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },
  centeredText: {
    position: "absolute",
  },
  button: {
    width: 200,
  },
});

export default HomeScreen;
