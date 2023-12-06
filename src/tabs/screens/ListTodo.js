import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Picker,
  CheckBox,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { supabase } from "../../libs/supabase";

// import logo from "../../assets/logo.png";

const List = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSelected1, setSelection1] = useState(false);

  const user = useSelector((state) => state.auth.data);

  const onSignOut = async () => {
    await supabase.auth.signOut();
    navigation.navigate("Home");
  };

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Hi {user["name"]}
        </Text>
        <TouchableOpacity onPress={onSignOut}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={{
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            backgroundColor: "#cfd0d1",
            marginTop: 8,
            borderRadius: "15",
            padding: 8,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholder="Search List..."
          placeholderTextColor="#9fa0a1"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Picker
          style={{
            flex: 1,
            backgroundColor: "#cfd0d1",
            marginTop: 15,
            borderRadius: "15",
            padding: 2,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
            marginRight: 7,
          }}
          placeholderTextColor="#9fa0a1"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Category"
            value={null}
            enabled={false}
            style={{ color: "#9fa0a1" }}
          />
          <Picker.Item label="Category 1" value="Category1" />
          <Picker.Item label="Category 2" value="Category2" />
          <Picker.Item label="Category 3" value="Category3" />
        </Picker>
        <Picker
          style={{
            flex: 1,
            backgroundColor: "#cfd0d1",
            marginTop: 15,
            borderRadius: "15",
            padding: 10,
            borderwidth: "5px",
            borderColor: "gray",
            borderRadius: 10,
            fontSize: 17,
          }}
          placeholderTextColor="#9fa0a1"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Status"
            value={null}
            enabled={false}
            style={{ color: "#9fa0a1" }}
          />
          <Picker.Item label="Category 1" value="Category1" />
          <Picker.Item label="Category 2" value="Category2" />
          <Picker.Item label="Category 3" value="Category3" />
        </Picker>
      </View>
      <View style={{ marginTop: "1rem" }}>
        <View
          style={{
            width: "auto",
            height: 100,
            backgroundColor: "#b0e9f7",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#b0e9f7",
            padding: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <View>
              <Text
                style={[styles.todoText, isSelected1 && styles.strikethrough]}
              >
                Study - React
              </Text>
              <Text style={[isSelected1 && styles.strikethrough]}>
                Ampun Sepuh Aku Baru Kenal
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Icon name="calendar" size={20} color="#82817c" />
                <Text style={{ marginLeft: 8 }}>1 Desember 2023</Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 60,
                  height: 20,
                  backgroundColor: "#eefaa7",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text>Study</Text>
              </View>
              <CheckBox
                value={isSelected1}
                onValueChange={setSelection1}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  todoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  item: {
    fontSize: 9,
  },
});
