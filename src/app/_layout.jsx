import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import ErrorBoundary from "../components/ErrorBoundary";
import { queryClient } from "../utils/queryClient";

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="form" options={{ title: "Form" }} />
          <Stack.Screen name="quotes" options={{ title: "Quotes" }} />
        </Stack>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
