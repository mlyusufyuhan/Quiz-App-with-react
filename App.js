import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import home from './screen/home';
import quiz from './screen/quiz';
import result from './screen/result';
import Title from './Component/Title';
import MyStack from './.expo-shared/Navigation';


const App = () => {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
} 

;

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingHorizontal:16,
},
});
