import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "../components/Button";
import { ScreenHeader } from "../components/ScreenHeader";
import tw from "../utils/tw";
import { FormData, formSchema } from "../utils/validationSchema";

export default function FormScreen(): React.JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: FormData): void => {
    console.log(data);
    setIsSubmitted(true);
  };

  const handleReset = (): void => {
    reset({
      name: "",
      email: "",
    });
    setIsSubmitted(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
      <View style={tw`flex-1 p-4 bg-white dark:bg-gray-900`}>
        <ScreenHeader title="Form" subtitle="Please fill out the form below" />

        {isSubmitted ? (
          <View style={tw`bg-green-100 p-4 rounded-lg mb-4`}>
            <Text style={tw`text-green-700 font-medium text-center`}>
              Thank you, your data has been saved!
            </Text>
            <View style={tw`mt-4`}>
              <Button
                title="Fill out form again"
                variant="success"
                onPress={handleReset}
              />
            </View>
          </View>
        ) : (
          <View style={tw`w-full`}>
            <View style={tw`mb-4`}>
              <Text style={tw`text-gray-700 dark:text-gray-300 mb-1`}>
                Name (min. 5 characters)
              </Text>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={tw`border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Enter your name"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
              />
              {errors.name && (
                <Text style={tw`text-red-500 mt-1`}>{errors.name.message}</Text>
              )}
            </View>

            <View style={tw`mb-6`}>
              <Text style={tw`text-gray-700 dark:text-gray-300 mb-1`}>
                Email
              </Text>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={tw`border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Enter your email"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.email && (
                <Text style={tw`text-red-500 mt-1`}>
                  {errors.email.message}
                </Text>
              )}
            </View>

            <Button
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              fullWidth
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
