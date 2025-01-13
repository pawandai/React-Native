// import React from "react";

// import { View, Text, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// export default function ProfileScreen() {
//   const router = useRouter();

//   const handleLogout = () => {
//     router.replace("/(auth)");
//   };

//   return (
//     <View className="flex-1 justify-center items-center bg-white p-4">
//       <Text className="text-2xl font-bold mb-6">
//         Welcome to the Profile Screen!
//       </Text>
//       <TouchableOpacity
//         className="w-full bg-red-500 p-3 rounded"
//         onPress={handleLogout}
//       >
//         <Text className="text-center text-white font-semibold">Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol, IconSymbolName } from "@/components/ui/IconSymbol";

export default function ProfileScreen() {
  const router = useRouter();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: require("../../assets/images/react-logo.png"),
  };

  const menuItems = [
    {
      name: "Edit Profile",
      icon: "person.badge.shield.checkmark.fill",
      route: "/edit-profile",
    },
    { name: "My Portfolio", icon: "briefcase.fill", route: "/portfolio" },
    { name: "Settings", icon: "gearshape.2.fill", route: "/settings" },
    { name: "Help & Support", icon: "questionmark", route: "/support" },
  ];

  const handleLogout = () => {
    router.replace("/(auth)");
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        <View className="flex-1">
          {/* Profile Header */}
          <View className="flex-row items-center mb-6">
            <Image
              source={user.profileImage}
              className="w-24 h-24 rounded-full mr-4"
              resizeMode="cover"
            />
            <View>
              <Text className="text-2xl font-semibold">{user.name}</Text>
              <Text className="text-gray-600">{user.email}</Text>
            </View>
          </View>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-100 p-4 rounded mb-4 flex-row items-center"
              onPress={() => {}}
            >
              <IconSymbol
                size={28}
                name={item.icon as IconSymbolName}
                color={"black"}
                style={{ marginRight: 10 }}
              />
              <Text className="text-lg font-semibold">{item.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            className="bg-gray-100 p-4 rounded mb-4 flex-row items-center"
            onPress={handleLogout}
          >
            <IconSymbol
              size={28}
              name={"signpost.and.arrowtriangle.up.fill"}
              color={"black"}
              style={{ marginRight: 10 }}
            />
            <Text className="text-lg font-semibold">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
