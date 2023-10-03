import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import DATA from './Data.js';
import Row from './components/Row.js';
import Constants from 'expo-constants';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Row item={item}/>
      )}
      >
        
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});
