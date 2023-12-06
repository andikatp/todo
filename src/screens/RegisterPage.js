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
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";

import { useDispatch } from "react-redux";
import { onSignUp } from "../redux/reducers/auth.js";
import { supabase } from "../libs/supabase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSignUpPressed = async () => {
    try {
      validators();
      dispatch(
        onSignUp({
          name: name.value,
          email: email.value,
          password: password.value,
        })
      );
      navigation.navigate("LoginPage");
    } catch (error) {
      console.error("Error during sign up:", error);
      Alert.alert(error);
    }
  };

  const validators = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
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
      <Text style={{ marginTop: "1rem", fontSize: 30, fontWeight: "bold" }}>
        Register
      </Text>
      <View>
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: "1rem",
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
          placeholder="Name"
          placeholderTextColor="#9fa0a1"
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
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
          placeholder=" Password"
          placeholderTextColor="#9fa0a1"
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
          onPress={onSignUpPressed}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            REGISTER
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
          <Text>Join Us Before?</Text>
          <Text
            style={{ color: "#FF5555", marginLeft: 5 }}
            disabled={loading}
            onPress={() => navigation.navigate("LoginPage")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
