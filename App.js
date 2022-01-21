import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      text: 'Сходить в магазин', 
      key: '1'
    },
    {
      text: 'Приготовить ужин', 
      key: '2'
    },
    {
      text: 'Помыть собаку', 
      key: '3'
    },
    {
      text: 'Покодить', 
      key: '4'
    },
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key !== key)
    })
  }
  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItem item={item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
}
