import React from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [120, 135, 128, 150, 165, 180],
        color: (opacity = 1) => `rgba(34, 202, 236, ${opacity})`, // Line color
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: "+1.25%" },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 2750.65,
      change: "-0.75%",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 3400.0,
      change: "+2.10%",
    },
  ];

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-gray-100 p-4"
      >
        <View className="mb-6">
          <Text className="text-2xl font-bold">Portfolio Overview</Text>
          <LineChart
            data={data}
            width={screenWidth - 32} // Adjust for padding
            height={220}
            chartConfig={chartConfig}
            bezier
            style={{ marginVertical: 8, borderRadius: 8 }}
          />
        </View>
        <View>
          <Text className="text-xl font-semibold mb-4">Watchlist</Text>
          {stocks.map((stock, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white p-4 mb-3 rounded-lg shadow"
              onPress={() => {}}
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg font-bold">{stock.symbol}</Text>
                  <Text className="text-gray-500">{stock.name}</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold">
                    ${stock.price.toFixed(2)}
                  </Text>
                  <Text
                    className={`font-semibold ${
                      stock.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stock.change}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
