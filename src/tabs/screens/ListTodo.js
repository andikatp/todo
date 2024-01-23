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

const List = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSelected1, setSelection1] = useState(false);

  const user = useSelector((state) => state.auth.data);

  const onSignOut = async () => {
    await supabase.auth.signOut();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi {user["name"]}</Text>
        <TouchableOpacity onPress={onSignOut}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search List..."
          placeholderTextColor="#9fa0a1"
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          placeholderTextColor="#9fa0a1"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Category"
            value={null}
            enabled={false}
            style={styles.pickerItem}
          />
          <Picker.Item label="Category 1" value="Category1" />
          <Picker.Item label="Category 2" value="Category2" />
          <Picker.Item label="Category 3" value="Category3" />
        </Picker>
        <Picker
          style={styles.picker}
          placeholderTextColor="#9fa0a1"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item
            label="Status"
            value={null}
            enabled={false}
            style={styles.pickerItem}
          />
          <Picker.Item label="Category 1" value="Category1" />
          <Picker.Item label="Category 2" value="Category2" />
          <Picker.Item label="Category 3" value="Category3" />
        </Picker>
      </View>
      <View style={styles.listItem}>
        <View style={styles.listItemContent}>
          <View>
            <Text
              style={[styles.todoText, isSelected1 && styles.strikethrough]}
            >
              Study - React
            </Text>
            <Text style={[isSelected1 && styles.strikethrough]}>
              Ampun Sepuh Aku Baru Kenal
            </Text>
            <View style={styles.dateContainer}>
              <Icon name="calendar" size={20} color="#82817c" />
              <Text style={styles.dateText}>1 Desember 2023</Text>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <View style={styles.tag}>
              <Text>Study</Text>
            </View>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkBox}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  searchInput: {
    backgroundColor: "#cfd0d1",
    marginTop: 8,
    borderRadius: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 17,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    flex: 1,
    backgroundColor: "#cfd0d1",
    marginTop: 15,
    borderRadius: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 17,
    marginRight: 7,
  },
  pickerItem: {
    color: "#9fa0a1",
  },
  listItem: {
    marginTop: "1rem",
  },
  listItemContent: {
    width: "auto",
    height: 100,
    backgroundColor: "#b0e9f7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#b0e9f7",
    padding: 5,
  },
  todoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  dateText: {
    marginLeft: 8,
  },
  checkboxContainer: {
    alignItems: "center",
  },
  tag: {
    width: 60,
    height: 20,
    backgroundColor: "#eefaa7",
    borderRadius: 10,
    alignItems: "center",
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});
