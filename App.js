import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from "./compoments/Start";
import { ChakraProvider } from '@chakra-ui/react'
import ButtonSample from "./compoments/ButtonSample";

export default function App() {
  return (
    <View style={styles.container}>
      <ChakraProvider>
          <ButtonSample text='📆'></ButtonSample>
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
