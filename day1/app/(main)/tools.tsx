import { IconSymbol, IconSymbolName } from "@/components/ui/IconSymbol";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ToolsScreen() {
  const tools = [
    {
      name: "Stock Screener",
      description: "Filter and analyze stocks based on various criteria.",
      icon: "chart.line.uptrend.xyaxis",
      image: require("../../assets/images/stock_screener_preview.png"),
      route: "/stock-screener",
    },
    {
      name: "Portfolio Tracker",
      description: "Monitor your investment portfolio in real-time.",
      icon: "briefcase.fill",
      image: require("../../assets/images/portfolio_tracker_preview.png"),
      route: "/portfolio-tracker",
    },
    {
      name: "Market News",
      description: "Stay updated with the latest financial news.",
      icon: "newspaper.fill",
      image: require("../../assets/images/market_news_preview.png"),
      route: "/market-news",
    },
    {
      name: "Price Alerts",
      description: "Set up alerts for stock price movements.",
      icon: "bell.fill",
      image: require("../../assets/images/price_alerts_preview.png"),
      route: "/price-alerts",
    },
    {
      name: "Currency Converter",
      description: "Convert currencies with real-time exchange rates.",
      icon: "dollarsign",
      image: require("../../assets/images/currency_converter_preview.png"),
      route: "/currency-converter",
    },
  ];

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        <View className="flex-1 my-6">
          {tools.map((tool, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-100 p-4 rounded mb-4 flex-row items-center"
              onPress={() => {}}
            >
              <IconSymbol
                size={28}
                name={tool.icon as IconSymbolName}
                color={"black"}
                style={{ marginRight: 10 }}
              />
              <View className="flex-1">
                <Text className="text-lg font-semibold">{tool.name}</Text>
                <Text className="text-gray-600">{tool.description}</Text>
              </View>
              <Image
                source={tool.image}
                className="w-16 h-16 rounded ml-4"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
