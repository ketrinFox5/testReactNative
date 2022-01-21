import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, TouchableHighlight, View } from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue] = useState('');
    const onChange = (text) => {
        setValue(text)
    };

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...'/>
        <Button title='Добавить задачу' color='#b642f5' onPress={() => addHandler(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%' 
    }
});