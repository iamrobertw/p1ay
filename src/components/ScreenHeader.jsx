import { Text, View } from "react-native";
import tw from "../utils/tw";

export function ScreenHeader({ title, subtitle }) {
  return (
    <View style={tw`mb-6`}>
      <Text
        style={tw`text-2xl font-bold text-center text-gray-800 dark:text-white`}
      >
        {title}
      </Text>
      {subtitle && (
        <Text style={tw`text-center text-gray-600 dark:text-gray-400 mt-1`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
