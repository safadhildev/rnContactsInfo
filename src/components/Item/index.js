import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#ff8c00',
    borderRadius: 50,
  },
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

const Item = ({data, last, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <>
          <View style={styles.wrapper}>
            <View style={styles.circle} />
            <Text style={styles.text}>
              {data?.firstName} {data?.lastName}
            </Text>
          </View>
          {!last && <View style={styles.line}></View>}
        </>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
