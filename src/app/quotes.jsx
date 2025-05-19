import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { fetchRandomQuote } from "../utils/api";
import tw from "../utils/tw";

export default function QuotesScreen() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["randomQuote"],
    queryFn: fetchRandomQuote,
  });

  const handleNewQuote = () => {
    refetch();
  };

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
          <View
            style={tw`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm`}
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
          </View>
        )}
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
