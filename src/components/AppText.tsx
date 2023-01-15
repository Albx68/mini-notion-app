import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

interface PROPS {
  style?: any;
  children: any;
  onPress?: any;
}

const AppText: React.FC<PROPS> = ({style, children, ...props}) => {
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
    <Text {...props} style={[...newStyle]}>
      {children}
    </Text>
  );
};

export default AppText;
