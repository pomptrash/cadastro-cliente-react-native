import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native'
import { Routes } from './src/rotas';
import Toast from 'react-native-toast-message';

export default function App() {
  
  return (
    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.OS === 'ios'? 'padding': undefined}
    >
      <SafeAreaView style={{flex:1}}>
          <Routes />
      </SafeAreaView>
      <Toast />
    </KeyboardAvoidingView>
)}


