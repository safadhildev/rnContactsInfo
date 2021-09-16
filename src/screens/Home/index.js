import React, {useState, useCallback} from 'react';
import {
  ScrollView,
  FlatList,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import AppBar from '../../components/AppBar';
import Item from '../../components/Item';

import Search from '../../../assets/search.svg';
import Add from '../../../assets/add.svg';

const data = require('../../data.json');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 50,
  },
});

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [contacts, setContacts] = useState(data);

  const _onAddContact = () => {};

  const _onSearchContact = () => {};

  const _onOpenContact = item => {
    // console.log(item);
    navigation.navigate('Details', {data: item});
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setContacts([]);
    setTimeout(() => {
      setContacts(data);
      setRefreshing(false);
    }, 500);
  }, []);

  const _renderItem = ({item, index}) => {
    console.log({item});
    console.log({contacts});
    return (
      <Item
        data={item}
        last={index === contacts.length}
        onPress={() => {
          _onOpenContact(item);
        }}
      />
    );
  };

  const _onSearch = () => {};
  const _onAdd = () => {};

  const _renderHeaderOption = ({type, onPress}) => {
    return (
      <TouchableOpacity style={{marginHorizontal: 15}} onPress={onPress}>
        {type === 'add' ? <Add fill="#ff8c00" /> : <Search fill="#ff8c00" />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        title="Contacts"
        leftComponent={_renderHeaderOption({
          type: 'search',
          onPress: () => {
            _onSearch();
          },
        })}
        rightComponent={_renderHeaderOption({
          type: 'add',
          onPress: () => {
            _onAdd();
          },
        })}
      />
      <FlatList
        data={contacts}
        renderItem={_renderItem}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
