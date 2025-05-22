import React, { ReactNode } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import tw from "../utils/tw";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends Omit<TouchableOpacityProps, "disabled"> {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  ...rest
}: ButtonProps) {
  // Determine button styles based on variant
  const getVariantStyles = () => {
    const variants: Record<ButtonVariant, string> = {
      primary: "bg-blue-500",
      secondary: "bg-gray-500",
      success: "bg-green-500",
      danger: "bg-red-500",
      warning: "bg-yellow-500",
      info: "bg-indigo-600",
    };

    return variants[variant] || variants.primary;
  };

  // Determine padding based on size
  const getSizeStyles = () => {
    const sizes: Record<ButtonSize, string> = {
      small: "py-2 px-3",
      medium: "py-3 px-4",
      large: "py-4 px-6",
    };

    return sizes[size] || sizes.medium;
  };

  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      style={tw`
        ${getVariantStyles()} 
        ${getSizeStyles()} 
        rounded-lg
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50" : ""}
        flex-row justify-center items-center
      `}
      onPress={onPress}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {leftIcon}
          <Text
            style={tw`
              ${leftIcon ? "ml-2" : ""}
              text-white font-medium text-center
            `}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
