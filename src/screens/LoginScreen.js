import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// It's good practice to place static assets like images in an 'assets' folder
// For now, I'll use a placeholder or assume the logo is handled differently.
// If you have a logo image, place it in 'd:\Edpay\assets\logo.png' or similar
// and uncomment the line below and adjust the path.
// const logo = require('../../assets/logo.png');

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login attempt with:', {username, password, rememberMe});
    navigation.navigate('Home'); // Navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Placeholder for logo - replace with <Image source={logo} style={styles.logo} /> */}
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoPlaceholderText}>Logo</Text>
        </View>
      </View>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome To Edpay</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {/* Placeholder for password visibility toggle icon */}
        <TouchableOpacity style={styles.eyeIconContainer}>
          <Text>👁️</Text>
          {/* Replace with actual icon */}
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={rememberMe ? '#007bff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setRememberMe}
            value={rememberMe}
            style={styles.switch}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff', // Light blueish background from image
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    // This is a rough approximation of the curved background element
    // A more accurate representation would require SVG or a custom shape component
    backgroundColor: 'rgba(200, 220, 255, 0.5)', // Light semi-transparent blue
    width: '150%', // Wider than screen to allow for curve illusion
    position: 'absolute',
    top: -100, // Adjust to position the curve
    left: '-25%',
    height: 300, // Adjust height of the curve
    borderBottomLeftRadius: 300, // Large radius for curve
    borderBottomRightRadius: 300,
    transform: [{rotate: '-15deg'}], // Slight rotation for asymmetry
    zIndex: -1, // Behind other content
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007bff', // Blue similar to logo in image
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120, // Pushes logo down into visible area
    transform: [{rotate: '15deg'}], // Counter-rotate to keep logo upright
  },
  logoPlaceholderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // logo: { // Uncomment and use if you have an image
  //   width: 100,
  //   height: 100,
  //   resizeMode: 'contain',
  //   marginBottom: 10, // Adjust as needed
  // },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    marginLeft: 5, // Slight indent for labels
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25, // More rounded corners
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  inputPassword: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeIconContainer: {
    padding: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginRight: 8,
    transform: [{scaleX: 0.8}, {scaleY: 0.8}], // Make switch a bit smaller
  },
  rememberMeText: {
    fontSize: 14,
    color: '#333',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007bff', // Blue link color
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
