import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { afterSignUp, onSignUp } from "../redux/reducers/auth.js";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { login } from "../routes/appRoute.js";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const dispatch = useDispatch();

  const onSignUpPressed = async () => {
    validators();
    dispatch(
      onSignUp({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    )
      .unwrap()
      .then((x) => {
        const { error } = x;
        if (error) {
          console.error("Unexpected error:", error);
          alert(error);
        } else {
          dispatch(
            afterSignUp({
              name: name.value,
              email: email.value,
              password: password.value,
            })
          );
          navigation.navigate(login);
        }
      })
      .catch((e) => console.log(e));
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
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/img2.png")} style={styles.image} />
      </View>
      <Text style={styles.title}>Register</Text>
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
        <TouchableHighlight style={styles.registerButton} onPress={onSignUpPressed}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableHighlight>
        <Text style={styles.loginText}>
          <Text>Join Us Before?</Text>
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("LoginPage")}
          >
            Login
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
    marginTop: "1rem",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#cfd0d1",
    marginTop: "1rem",
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    fontSize: 17,
  },
  registerButton: {
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
  loginText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  loginLink: {
    color: "#FF5555",
    marginLeft: 5,
  },
});

export default RegisterScreen;
