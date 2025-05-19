import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../utils/tw";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={tw`flex-1 items-center justify-center p-4 bg-white dark:bg-gray-900`}
    >
      <Text style={tw`text-2xl font-bold text-gray-800 dark:text-white mb-10`}>
        My Mobile App
      </Text>

      <View style={tw`w-full max-w-sm gap-4`}>
        <TouchableOpacity
          style={tw`flex-row items-center p-4 bg-blue-500 rounded-lg`}
          onPress={() => router.push("/form")}
        >
          <FontAwesome name="wpforms" size={24} color="white" />
          <Text style={tw`ml-3 text-white font-semibold`}>Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center p-4 bg-green-500 rounded-lg`}
          onPress={() => router.push("/quotes")}
        >
          <FontAwesome name="quote-right" size={24} color="white" />
          <Text style={tw`ml-3 text-white font-semibold`}>API</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
