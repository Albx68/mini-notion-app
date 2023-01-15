import React, {Dispatch, SetStateAction} from 'react';
import {
  ImageStyle,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';

export default function AppTextInput({
  style,
  placeholder,
  onChangeText,
  value,
}: {
  style: {}[];
  placeholder: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  value: string;
}) {
  const baseStyle = StyleSheet.create({
    fontFamily: 'RobotoSlab-Regular' as ViewStyle | TextStyle | ImageStyle,
    color: '#000' as TextStyle,
  });
  let newStyle;
  if (Array.isArray(style)) {
    newStyle = [baseStyle, ...style];
  } else {
    newStyle = [baseStyle, style];
  }
  return (
    <TextInput
      style={[...newStyle]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
}
