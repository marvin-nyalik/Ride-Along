import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) => (
  <TouchableOpacity
  onPress={onPress}
  className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}}`
  >
    {IconLeft && <IconLeft/>}
    <Text>{title}</Text>
    {IconRight && <IconRight/>}
  </TouchableOpacity>
);

export default CustomButton;
