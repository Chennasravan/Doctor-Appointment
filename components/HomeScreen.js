import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const doctorsData = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' , phone : "1234567890" , email : "abc@gmail.com"},
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist',phone : "1234567890" , email : "abc@gmail.com" },
  { id: 3, name: 'Dr. Gret Smith', specialization: 'Dermatologist',phone : "1234567890" , email : "abc@gmail.com" },
  { id: 4, name: 'Dr. Frtw Doe', specialization: 'Dermatologist',phone : "1234567890" , email : "abc@gmail.com" },
  { id: 5, name: 'Dr. Bval Doe', specialization: 'Dermatologist',phone : "1234567890" , email : "abc@gmail.com" },
  { id: 6, name: 'Dr. Symt Smith', specialization: 'Dermatologist',phone : "1234567890" , email : "abc@gmail.com" },
  // Add more doctor objects as needed
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleDoctorPress = (doctor) => {
    // Navigate to DoctorProfileScreen and pass the selected doctor as a parameter
    navigation.navigate('DoctorProfile', { doctor });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Doctors</Text>
      <FlatList
        data={doctorsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDoctorPress(item)}>
            <View style={styles.doctorItem}>
              <Text style={styles.doctorName}>{item.name}</Text>
              <Text style={styles.specialization}>{item.specialization}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding:10,
    textTransform:"uppercase",
  },
  doctorItem: {
    borderWidth: 3,
    borderColor: '#bbb',
    paddingVertical: 10,
    backgroundColor:"#fff",
    margin:10,
    display:"flex",
    justifyContent:"center",
    padding:20,
    alignContent:"center",
    borderRadius:40,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialization: {
    color: '#555',
  },
});

export default HomeScreen;
