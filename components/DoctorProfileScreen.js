import React from 'react';
import { navigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';

const DoctorProfileScreen = ({ route }) => {
  const { doctor } = route.params;
  
  const handleAppointmentPress = () => {
    // Navigate to the Appointment screen with doctor's data
    navigation.navigation('./AppointmentScreen', { doctor });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/doctor-avatar-male.png')} style={styles.dp}></Image>

      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text style={styles.specialization}>{doctor.specialization}</Text>
      <Text style={styles.details}>Phone: {doctor.phone}</Text>
      <Text style={styles.details}>Email: {doctor.email}</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} onPress={handleAppointmentPress}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#29bdc1",
    
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white",
  },
  specialization: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 20,
},
details: {
    color:"white",
    fontSize: 16,
    marginBottom: 10,
  },
  plus:{
    height:10,
    backgroundColor:"black",
    width:80,
    margin:10,
    display:"flex",
    justifyContent:"center",
    borderWidth:3,
    borderRadius:40,
    
  },
  dp:{
    width: 200,
    height: 150,
    resizeMode: 'stretch',
    borderRadius:100,
    marginBottom:20,
  },
  button:{
    backgroundColor:'black',
    color:'white',
    padding:15,
    borderRadius:20,
  },
  buttonText:{
    color:'white',
  }
  
});

export default DoctorProfileScreen;
