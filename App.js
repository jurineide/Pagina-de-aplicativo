import mock from './src/mocks/cesta'
import { StatusBar,SafeAreaView } from 'react-native';
import Cesta  from './src/Telas/Cesta/index';
import React from "react"
import { useFonts, Montserrat_400Regular_Italic ,Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Item from './src/Telas/Cesta/Components/Item';
import img from './assets/splash.png'

export default function App() {
  const[fontCarregada]=useFonts({
    'MontserratRegular':Montserrat_400Regular_Italic,
    'MontserratBold':Montserrat_700Bold,
  });
  if(!fontCarregada){
    return <>
    {img}    
    </>    
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mock}/> 
      <Item {...mock}/>                
    </SafeAreaView>
  );
}


