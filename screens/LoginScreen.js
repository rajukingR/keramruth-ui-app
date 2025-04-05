import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!mobile || !password) {
      Alert.alert('Error', 'Please enter both mobile number and password');
      return;
    }

    const payload = {
      mobile_number: mobile,
      password: password,
      rememberMe: false,
    };

    setLoading(true);
    
    try {
      const response = await fetch('https://erp.keramruth.com/api/user/signin_web', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Login Successful!', [
          { text: 'OK', onPress: () => navigation.replace('Main') },
        ]);
        console.log('Response:', result);
      } else {
        Alert.alert('Error', result.message || 'Invalid mobile number or password');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Section with .webp image */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo.webp')} // Changed to .webp
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.instructionText}>Enter your credentials</Text>

        <View style={styles.separator} />

        <Text style={styles.inputLabel}>Mobile No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={onSubmit}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By logging, you are agreeing with our Terms of Use and Privacy Policy
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 280,
    height: 200,
  },
  formContainer: {
    marginTop: 0,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 25,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;