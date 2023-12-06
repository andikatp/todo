import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Anda perlu menginstal react-native-vector-icons sebelum menggunakan ini

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
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add Category</Text>

      <TextInput
        style={{
          backgroundColor: "#cfd0d1",
          marginTop: 20,
          borderRadius: 10,
          padding: 15,
          borderWidth: 1,
          borderColor: "black",
          fontSize: 17,
        }}
        placeholder="Name"
        placeholderTextColor="#9fa0a1"
        onChangeText={(text) => setSelectedValue(text)}
      />

      <TouchableOpacity
        onPress={() => {
          addCategory(selectedValue);
        }}
        style={{
          backgroundColor: "#FF5555",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          ADD CATEGORY
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
        List Category
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {categories.map((category, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                backgroundColor: "#e0e0e0",
                padding: 10,
                borderRadius: 5,
              }}
            >
              {category}
            </Text>
            <TouchableOpacity onPress={() => removeCategory(index)}>
              <Icon
                name="times"
                size={20}
                color="#FF5555"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AddCategory;
