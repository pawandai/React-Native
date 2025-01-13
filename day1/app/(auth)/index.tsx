import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Both fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email format.");
      return;
    }

    // Proceed with login logic
    Alert.alert("Success", "Logged in successfully!");
    router.replace("/(main)");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white p-4"
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold mb-6">Log In</Text>
        <TextInput
          className="w-full border rounded-xl border-gray-300 p-2 py-3 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View className="w-full border rounded-xl border-gray-300 p-2 mb-6 flex-row items-center">
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
        <TouchableOpacity
          className="w-full bg-blue-500 p-3 rounded-xl"
          onPress={handleLogin}
        >
          <Text className="text-center text-white font-semibold">Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-8"
          onPress={() => router.push("/(auth)/signup")}
        >
          <Text className="text-blue-500">Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
