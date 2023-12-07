import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
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
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/img2.png")} style={styles.image} />
      </View>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput
          style={styles.input}
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
          style={styles.input}
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
        <TouchableHighlight style={styles.loginButton} onPress={onLoginPressed}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
        <Text style={styles.registerText}>
          <Text>New Users?</Text>
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("RegisterPage")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "1rem",
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  title: {
    marginTop: "2rem",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#cfd0d1",
    marginTop: "3rem",
    borderRadius: 10,
    padding: 15,
    borderWidth: 5,
    borderColor: "gray",
    fontSize: 17,
  },
  loginButton: {
    backgroundColor: "#FF5555",
    padding: 15,
    borderRadius: 10,
    marginTop: "2rem",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  registerText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  registerLink: {
    color: "#FF5555",
    marginLeft: 5,
  },
});

export default LoginScreen;
