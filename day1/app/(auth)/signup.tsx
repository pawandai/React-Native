import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "We need access to your media library to select a profile picture."
      );
      return;
    }

    // Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Proceed with signup logic
    Alert.alert("Success", "Account created successfully!");
    router.replace("/(main)");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white p-4"
    >
      <View className="flex-1 justify-center items-center">
        <View className="flex-row items-center mb-6">
          <Image
            source={require("../../assets/images/lock.png")} // Replace with your image path
            className="w-8 h-8 mr-2"
          />
          <Text className="text-2xl font-bold">Register</Text>
        </View>
        <TouchableOpacity onPress={handleImagePick} className="mb-4">
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              className="w-24 h-24 rounded-full"
            />
          ) : (
            <View className="w-28 h-28 rounded-full bg-gray-200 justify-center items-center p-2">
              <Text className="text-gray-500">Add Photo</Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          className="w-full border rounded-xl border-gray-300 px-2 py-3 mb-4"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className="w-full border rounded-xl py-3 border-gray-300 px-2 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View className="w-full border rounded-xl border-gray-300 p-2 mb-4 flex-row items-center">
          <TextInput
            className="flex-1"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text className="text-blue-500">
              {passwordVisible ? (
                <IconSymbol size={28} name="eye.fill" color={"gray"} />
              ) : (
                <IconSymbol size={28} name="eye.slash.fill" color={"gray"} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full border rounded-xl border-gray-300 p-2 mb-6 flex-row items-center">
          <TextInput
            className="flex-1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text className="text-blue-500">
              {passwordVisible ? (
                <IconSymbol size={28} name="eye.fill" color={"gray"} />
              ) : (
                <IconSymbol size={28} name="eye.slash.fill" color={"gray"} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="w-full bg-green-500 p-3 rounded-xl"
          onPress={handleSignup}
        >
          <Text className="text-center text-white font-semibold">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-8"
          onPress={() => router.push("/(auth)")}
        >
          <Text className="text-blue-500">Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
