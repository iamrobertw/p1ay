import { Text, View } from "react-native";
import tw from "../utils/tw";

export default function Index() {
  return (
    <View
      style={tw`flex-1 items-center justify-center bg-white dark:bg-gray-900`}
    >
      <Text style={tw`text-xl font-bold text-gray-800 dark:text-white`}>
        Welcome to My App
      </Text>
    </View>
  );
}
