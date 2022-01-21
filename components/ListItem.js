import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ListItem({item, deleteHandler}) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>

          <Text style={styles.text}>{item.text}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        // borderRadius: 10,
        backgroundColor: '#b642f5',
        // borderWidth: 1,
        // borderColor: '#fff',
        marginTop: 20,
        marginLeft: '20%',
        width: '60%',
        color: '#fff'
    }
});