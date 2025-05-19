import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { queryClient } from "../utils/queryClient";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="form" options={{ title: "Form" }} />
        <Stack.Screen name="quotes" options={{ title: "Quotes" }} />
      </Stack>
    </QueryClientProvider>
  );
}
