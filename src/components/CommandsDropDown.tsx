import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {dropDownData, dropDownDataType} from '../../App';
import AppText from './AppText';

type props = {handleInputType: (label: string) => void};

const CommandsDropDown: React.FC<props> = ({handleInputType}) => {
  return (
    <View style={styles.dropDown}>
      {dropDownData.map(
        ({label, heading, description}: dropDownDataType, idx: number) => {
          return (
            <Pressable
              key={label}
              onPress={() => handleInputType(label)}
              style={[
                styles.option,
                idx !== dropDownData.length - 1 ? styles.borderBottom : null,
              ]}>
              <View style={styles.optionBox}>
                <AppText>{label}</AppText>
              </View>
              <View>
                <AppText>{heading}</AppText>
                <AppText style={styles.para}>{description}</AppText>
              </View>
            </Pressable>
          );
        },
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDown: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
  },
  option: {
    flexDirection: 'row',
    padding: 2,
    height: 45,
    alignItems: 'center',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
  },
  optionBox: {
    marginRight: 10,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'hsla(0,0%,95%,.644)',
  },
  para: {
    fontSize: 8,
    color: 'gray',
  },
});

export default CommandsDropDown;
