import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to Signup screen
    router.push("/(auth)/signup");
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Image
        source={require("../../assets/images/react-logo-large.png")}
        className="w-3/4 h-1/2 mb-6"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mb-4">Welcome to MyApp!</Text>
      <Text className="text-center text-gray-600 mb-6">
        Discover new features and functionalities to enhance your experience.
      </Text>
      <TouchableOpacity
        className="w-full bg-blue-500 p-3 rounded"
        onPress={handleContinue}
      >
        <Text className="text-center text-white font-semibold">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
