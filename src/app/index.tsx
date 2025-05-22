import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button } from "../components/Button";
import { ScreenHeader } from "../components/ScreenHeader";
import tw from "../utils/tw";

export default function Index(): React.JSX.Element {
  const router = useRouter();

  return (
    <View
      style={tw`flex-1 items-center justify-center p-4 bg-white dark:bg-gray-900`}
    >
      <ScreenHeader
        title="My Mobile App"
        subtitle="A simple demo app with multiple screens"
      />

      <View style={tw`w-full max-w-sm gap-4`}>
        <Button
          title="Form"
          variant="primary"
          fullWidth
          onPress={() => router.push("/form")}
          leftIcon={<FontAwesome name="wpforms" size={24} color="white" />}
        />

        <Button
          title="API"
          variant="info"
          fullWidth
          onPress={() => router.push("/quotes")}
          leftIcon={<FontAwesome name="quote-right" size={24} color="white" />}
        />
      </View>
    </View>
  );
}
