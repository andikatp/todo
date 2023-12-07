import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddCategory = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [categories, setCategories] = useState([]);

  const addCategory = (categoryName) => {
    if (categoryName.trim() !== "") {
      setCategories([...categories, categoryName]);
    }
  };

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add Category</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#9fa0a1"
        onChangeText={(text) => setSelectedValue(text)}
      />

      <TouchableOpacity
        onPress={() => {
          addCategory(selectedValue);
        }}
        style={styles.addButton}
      >
        <Text style={styles.buttonText}>ADD CATEGORY</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>List Category</Text>

      <View style={styles.categoryList}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
            <TouchableOpacity onPress={() => removeCategory(index)}>
              <Icon
                name="times"
                size={20}
                color="#FF5555"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#cfd0d1",
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 17,
  },
  addButton: {
    backgroundColor: "#FF5555",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  categoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 20,
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    marginLeft: 5,
  },
});

export default AddCategory;
