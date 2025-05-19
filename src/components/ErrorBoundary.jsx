import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../utils/tw";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Błąd w aplikacji:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View
          style={tw`flex-1 items-center justify-center p-4 bg-white dark:bg-gray-900`}
        >
          <Text style={tw`text-xl font-bold text-red-600 mb-4`}>
            Coś poszło nie tak
          </Text>
          <Text style={tw`text-gray-700 dark:text-gray-300 mb-6`}>
            {this.state.error?.message || "Wystąpił nieoczekiwany błąd."}
          </Text>
          <TouchableOpacity
            style={tw`bg-blue-500 py-3 px-6 rounded-lg`}
            onPress={() => this.setState({ hasError: false })}
          >
            <Text style={tw`text-white font-semibold`}>Spróbuj ponownie</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
