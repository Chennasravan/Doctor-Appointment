import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Here you can implement your authentication logic.
    // For simplicity, let's assume successful login for any non-empty email and password.
    if (email.trim() !== "" && password.trim() !== "") {
      // Navigate to HomeScreen upon successful login
      navigation.navigate("Home");
    } else {
      // Handle authentication error (if any)
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.cont}>
        <Text style={styles.title}>Doctor App</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="black" 
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="black" 
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor:"rgba(255, 255, 255, 0.5)",
    color:"black",
  },
 

  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  cont:
  {
    padding:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  }
});

export default LoginScreen;
