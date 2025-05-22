import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { queryClient } from "../utils/queryClient";

export default function RootLayout(): React.JSX.Element {
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
