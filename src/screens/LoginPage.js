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
  TouchableHighlight,
} from "react-native";
import { useDispatch } from "react-redux";
import { afterLogin, onSignIn } from "../redux/reducers/auth.js";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { supabase } from "../libs/supabase.js";
import alert from "../helpers/alert.js";
import { navigator } from "../routes/appRoute.js";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const dispatch = useDispatch();

  const onLoginPressed = () => {
    validator();
    dispatch(onSignIn({ email: email.value, password: password.value }))
      .unwrap()
      .then((x) => {
        const { data, error } = x;
        if (error) {
          console.error("Unexpected error:", error);
          alert(error);
        } else {
          dispatch(afterLogin({ email: email.value }));
          navigation.navigate(navigator);
        }
      })
      .catch((error) => {
        console.error("Unexpected error:", error);
        alert(error);
      });
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
          placeholder="Password"
          placeholderTextColor="#9fa0a1"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <TouchableHighlight
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
        </TouchableHighlight>
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

const style = StyleSheet.create({});

export default LoginScreen;
