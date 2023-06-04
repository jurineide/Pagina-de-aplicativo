import mock from './src/mocks/cesta'
import { StatusBar,SafeAreaView, View } from 'react-native';
import Cesta  from './src/Telas/Cesta/index';
import React from "react"
import { useFonts, Montserrat_400Regular_Italic ,Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const[fontCarregada]=useFonts({
    'MontserratRegular':Montserrat_400Regular_Italic,
    'MontserratBold':Montserrat_700Bold,
  });
  if(!fontCarregada){
    return<View/>
  }
  return (
    <SafeAreaView >
      <StatusBar/>
      <Cesta {...mock}/>                 
    </SafeAreaView>
  );
}


