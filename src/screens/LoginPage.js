import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { onSignIn } from "../redux/reducers/auth.js";

import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const onLoginPressed = async () => {
    validator();
    dispatch(
      onSignIn({
        email: email.value,
        password: password.value,
      })
    );
    navigation.navigate("Navigator");
  };

  const validator = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <View style={{ padding: "1rem" }}>
      <View>
        <Image
          source={require("../assets/img2.png")}
          style={{ width: 300, height: 200, alignSelf: "center" }}
        />
      </View>
      <Text style={{ marginTop: "2rem", fontSize: 30, fontWeight: "bold" }}>
        Login
      </Text>
      <View>
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: "3rem",
            borderRadius: "15",
            padding: 15,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholder="Email"
          placeholderTextColor="#9fa0a1"
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: 15,
            borderRadius: "15",
            padding: 15,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Pressable
          style={{
            backgroundColor: "#FF5555",
            padding: 15,
            borderRadius: 10,
            marginTop: "2rem",
          }}
          onPress={onLoginPressed}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            LOGIN
          </Text>
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          <Text>New Users?</Text>
          <Text
            style={{ color: "#FF5555", marginLeft: 5 }}
            onPress={() => navigation.navigate("RegisterPage")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
