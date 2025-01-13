import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol, IconSymbolName } from "@/components/ui/IconSymbol";

export default function SupportScreen() {
  const supportOptions = [
    {
      name: "FAQ",
      description: "Find answers to common questions.",
      icon: "questionmark.circle",
      route: "/faq",
    },
    {
      name: "Contact Us",
      description: "Get in touch with our support team.",
      icon: "phone.and.waveform",
      route: "/contact-us",
    },
    {
      name: "Live Chat",
      description: "Chat with a support representative.",
      icon: "person.2",
      route: "/live-chat",
    },
    {
      name: "Feedback",
      description: "Provide feedback about our app.",
      icon: "message",
      route: "/feedback",
    },
    {
      name: "Terms & Conditions",
      description: "Read our terms and conditions.",
      icon: "newspaper",
      route: "/terms-conditions",
    },
  ];

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        <View className="flex-1 my-6">
          {supportOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-100 p-4 rounded mb-4 flex-row items-center"
              onPress={() => {}}
            >
              <IconSymbol
                size={28}
                name={option.icon as IconSymbolName}
                color={"black"}
                style={{ marginRight: 10 }}
              />
              <View className="flex-1">
                <Text className="text-lg font-semibold">{option.name}</Text>
                <Text className="text-gray-600">{option.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
