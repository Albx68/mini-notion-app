import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from './src/components/AppText';
import AppTextInput from './src/components/AppTextInput';
import CommandsDropDown from './src/components/CommandsDropDown';

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
  textItalic: {fontSize: 16, fontStyle: 'italic'},
  regularText: {fontSize: 16},
  sectionContainer: {
    paddingTop: 20,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;

export const dropDownMap = {
  H1: 'Heading 1',
  H2: 'Heading 2',
  Italic: 'Text Italic',
  Text: 'Regular Text',
};

export const dropDownClassMap = {
  H1: 'heading1',
  H2: 'heading2',
  Italic: 'textItalic',
  Text: 'regularText',
};

export type dropDownDataType = (typeof dropDownData)[0];

export const dropDownData = [
  {
    label: 'H1',
    heading: 'Heading 1',
    description: 'Big Section Heading',
  },
  {
    label: 'H2',
    heading: 'Heading 2',
    description: 'Medium Section Heading',
  },
  {
    label: 'Italic',
    heading: 'Text Italic',
    description: 'Italic text',
  },
  {
    label: 'Text',
    heading: 'Regular Text',
    description: 'Regular text for paragraph',
  },
];

export const dropDownArr = dropDownData.map(el => el.label);
