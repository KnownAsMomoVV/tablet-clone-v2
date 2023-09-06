import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from "./compoments/Buttons";
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <View style={styles.container}>
      <ChakraProvider>
          <Buttons></Buttons>
      </ChakraProvider>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
