import { useQuery } from "@tanstack/react-query";
import { MotiView } from "moti";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Switch, Text, View } from "react-native";
import { Button } from "../components/Button";
import { ScreenHeader } from "../components/ScreenHeader";
import { fetchRandomQuote, Quote } from "../utils/api";
import tw from "../utils/tw";

export default function QuotesScreen(): React.JSX.Element {
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { data, isLoading, isError, error, refetch } = useQuery<Quote, Error>({
    queryKey: ["randomQuote"],
    queryFn: fetchRandomQuote,
  });

  const handleNewQuote = (): void => {
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
      <ScreenHeader title="Random Quote" subtitle="Quotes from DummyJSON API" />

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
              &ldquo;{data?.quote}&rdquo;
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

      <View style={tw`mb-8`}>
        <Button
          title={isLoading ? "Loading..." : "Generate New Quote"}
          onPress={handleNewQuote}
          variant="info"
          fullWidth
          disabled={isLoading}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
