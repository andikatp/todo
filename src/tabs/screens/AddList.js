import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddList = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add List</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#9fa0a1"
      />

      <Picker
        style={styles.picker}
        placeholderTextColor="#9fa0a1"
        placeholderText="Category"
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

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Choose Date"
        customInput={<TextInput style={styles.datePickerInput} />}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Description"
        placeholderTextColor="#9fa0a1"
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>ADD LIST</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 17,
  },
  picker: {
    backgroundColor: "#cfd0d1",
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 17,
  },
  pickerItem: {
    color: "#9fa0a1",
  },
  datePickerInput: {
    backgroundColor: "#cfd0d1",
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 17,
    flex: 1,
    width: "91%",
  },
  textArea: {
    backgroundColor: "#cfd0d1",
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 17,
  },
  addButton: {
    backgroundColor: "#FF5555",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default AddList;
