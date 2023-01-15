import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from './src/components/AppText';
import AppTextInput from './src/components/AppTextInput';
import CommandsDropDown from './src/components/CommandsDropDown';
import {dropDownMap, dropDownClassMap} from './src/data';

function App(): JSX.Element {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('default');

  const commandsDropDownOn = input === '/';

  const placeholder =
    inputType === 'default'
      ? "Type '/' for commands"
      : dropDownMap[inputType as keyof typeof dropDownMap];

  const currentDropDownStyleMap =
    dropDownClassMap[inputType as keyof typeof dropDownMap];

  const dynamicStyle =
    inputType === 'default'
      ? styles.defaultInput
      : styles[currentDropDownStyleMap as keyof typeof styles];

  const handleInputType = (label: string) => {
    setInput('');
    setInputType(label);
  };

  return (
    <View style={styles.sectionContainer}>
      <AppText style={styles.heading}>Mini Notion</AppText>
      <AppTextInput
        style={[styles.input, dynamicStyle]}
        placeholder={placeholder}
        onChangeText={setInput}
        value={input}
      />
      {commandsDropDownOn && (
        <CommandsDropDown handleInputType={handleInputType} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    margin: 10,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: '#fdf6f3',
  },
  defaultInput: {},
  heading1: {fontSize: 32},
  heading2: {fontSize: 24},
  textItalic: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  regularText: {fontSize: 16},
  sectionContainer: {
    paddingTop: 20,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
