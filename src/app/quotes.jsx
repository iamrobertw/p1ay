import { Text, View } from "react-native";
import tw from "../utils/tw";

export default function QuotesScreen() {
  return (
    <View
      style={tw`flex-1 items-center justify-center bg-white dark:bg-gray-900`}
    >
      <Text style={tw`text-xl font-bold text-gray-800 dark:text-white`}>
        Quotes Screen
      </Text>
      <Text style={tw`mt-2 text-gray-600 dark:text-gray-300`}>
        Quotes from API will appear here
      </Text>
    </View>
  );
}
