import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

const AppointmentScreen = ({ route }) => {
  const { doctor } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleAppointmentSchedule = () => {
    // Handle appointment scheduling logic here
    console.log(`Appointment scheduled with ${doctor.name} on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule an Appointment</Text>
      <Text style={styles.doctorName}>{doctor.name}</Text>

      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="date"
        placeholder="Select Date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setSelectedDate(date)}
      />

      <DatePicker
        style={styles.datePicker}
        date={selectedTime}
        mode="time"
        placeholder="Select Time"
        format="HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(time) => setSelectedTime(time)}
      />

      <TouchableOpacity style={styles.button} onPress={handleAppointmentSchedule}>
        <Text style={styles.buttonText}>Schedule Appointment</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 18,
    marginBottom: 20,
  },
  datePicker: {
    width: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default AppointmentScreen;
