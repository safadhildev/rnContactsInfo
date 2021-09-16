import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import AppBar from '../../components/AppBar';
import Field from '../../components/Field';
import {contactsUpdate} from '../../providers/actions/Contacts';

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#ff8c00',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    backgroundColor: '#EEEEEE',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  headerOption: {
    marginHorizontal: 20,
  },
  headerOptionText: {
    color: '#ff8c00',
    fontSize: 20,
  },
});

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const Details = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {data} = route.params;

  const contacts = useSelector(state => {
    return state.data;
  });

  console.log({data});
  const [contact, setContact] = useState(data || initialData);

  const _onChangeText = (value, type) => {
    setContact({...data, [type]: value});
  };

  const _onCancel = () => {
    navigation.goBack();
  };

  const _onSaveContact = () => {
    let updatedArr = contacts;
    const index = contacts.findIndex(item => item.id === contact.id);
    updatedArr[index] = contact;
    dispatch(contactsUpdate(updatedArr));
    navigation.goBack();
  };

  const _onSave = () => {
    if (!contact?.firstName) {
      Alert.alert('Error', 'First Name cannot be empty');
    } else if (!contact?.lastName) {
      Alert.alert('Error', 'Last Name cannot be empty');
    } else {
      _onSaveContact();
    }
  };

  const _renderHeaderOption = ({label, onPress}) => {
    return (
      <TouchableOpacity style={styles.headerOption} onPress={onPress}>
        <Text style={styles.headerOptionText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <AppBar
        title=""
        leftComponent={_renderHeaderOption({
          label: 'Cancel',
          onPress: () => {
            _onCancel();
          },
        })}
        rightComponent={_renderHeaderOption({
          label: 'Save',
          onPress: () => {
            _onSave();
          },
        })}
      />
      <View style={{flex: 1, marginTop: 50}}>
        <View style={styles.circle} />
        <Text style={styles.sectionTitle}>Main Information</Text>
        <Field
          label="First Name"
          onChangeText={val => {
            _onChangeText(val, 'firstName');
          }}
          value={contact?.firstName}
        />
        <View style={styles.line} />
        <Field
          label="Last Name"
          onChangeText={val => {
            _onChangeText(val, 'lastName');
          }}
          value={contact?.lastName}
        />
        <View style={styles.line} />
        <Text style={styles.sectionTitle}>Sub Information</Text>
        <Field
          label="Email"
          onChangeText={val => {
            _onChangeText(val, 'email');
          }}
          value={contact?.email}
        />
        <View style={styles.line} />
        <Field
          label="Phone"
          onChangeText={val => {
            _onChangeText(val, 'phone');
          }}
          value={contact?.phone}
        />
      </View>
    </>
  );
};

export default Details;
