import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity } from "react-native";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddList = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add List</Text>
      <TextInput
        style={{
          backgroundColor: "#cfd0d1",
          marginTop: "3rem",
          borderRadius: "15",
          padding: 15,
          borderwidth: "1px",
          borderColor: "black",
          borderRadius: 10,
          fontSize: 17,
        }}
        placeholder="Name"
        placeholderTextColor="#9fa0a1"
      />
      <Picker
        style={{
          backgroundColor: "#cfd0d1",
          marginTop: 15,
          borderRadius: "15",
          padding: 15,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 10,
          fontSize: 17,
        }}
        placeholderTextColor="#9fa0a1"
        placeholderText="Category"
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

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Choose Date"
        customInput={
          <input
            style={{
              backgroundColor: "#cfd0d1",
              marginTop: 15,
              borderRadius: "15",
              padding: 15,
              borderWidth: "1px",
              borderColor: "black",
              borderRadius: 10,
              fontSize: 17,
              flex: 1,
              width: "91%",
            }}
          />
        }
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
        placeholder="Description"
        placeholderTextColor="#9fa0a1"
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#FF5555",
          padding: 15,
          borderRadius: 10,
          marginTop: "2rem",
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
          ADD LIST
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddList;
