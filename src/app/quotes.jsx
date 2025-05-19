import { useQuery } from "@tanstack/react-query";
import { MotiView } from "moti";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchRandomQuote } from "../utils/api";
import tw from "../utils/tw";

export default function QuotesScreen() {
  const [autoRefresh, setAutoRefresh] = useState(false);
  const intervalRef = useRef(null);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["randomQuote"],
    queryFn: fetchRandomQuote,
  });

  const handleNewQuote = () => {
    refetch();
  };

  // Setup auto-refresh
  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = setInterval(() => {
        refetch();
      }, 10000); // 10 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, refetch]);

  return (
    <View style={tw`flex-1 p-4 bg-white dark:bg-gray-900`}>
      <Text
        style={tw`text-2xl font-bold text-center text-gray-800 dark:text-white mb-8`}
      >
        Random Quote
      </Text>

      <View style={tw`flex-1 justify-center`}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#4F46E5" />
        ) : isError ? (
          <View style={tw`bg-red-100 p-4 rounded-lg mb-4`}>
            <Text style={tw`text-red-700 font-medium text-center`}>
              Error: {error.message || "Failed to load quote"}
            </Text>
          </View>
        ) : (
          <MotiView
            style={tw`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm`}
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 500 }}
            key={data?.id || Math.random()}
          >
            <Text
              style={tw`text-xl text-gray-800 dark:text-white font-medium italic mb-4`}
            >
              "{data?.quote}"
            </Text>
            <Text
              style={tw`text-right text-gray-600 dark:text-gray-400 font-medium`}
            >
              — {data?.author}
            </Text>
          </MotiView>
        )}
      </View>

      <View
        style={tw`mb-4 flex-row items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg`}
      >
        <Text style={tw`text-gray-700 dark:text-gray-300 font-medium`}>
          Auto-refresh every 10 seconds
        </Text>
        <Switch
          value={autoRefresh}
          onValueChange={setAutoRefresh}
          trackColor={{ false: "#cbd5e1", true: "#818cf8" }}
          thumbColor={autoRefresh ? "#4f46e5" : "#f4f4f5"}
        />
      </View>

      <TouchableOpacity
        style={tw`bg-indigo-600 p-4 rounded-lg mb-4`}
        onPress={handleNewQuote}
        disabled={isLoading}
      >
        <Text style={tw`text-white font-medium text-center`}>
          {isLoading ? "Loading..." : "Generate New Quote"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
