import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 2,
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#BDBDBD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
});

const Field = ({label, value, onChangeText, error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput onChangeText={onChangeText} style={styles.input}>
        {value}
      </TextInput>
    </View>
  );
};

export default Field;
