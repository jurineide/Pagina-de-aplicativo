import React from 'react';
import Texto from '../../../components/Texto';
import { Image, View , StyleSheet} from 'react-native';


export default function Item({ itens: { nome, imagem } }) {
    return <View style={estilos.itens}>
      <Image source={imagem} style={estilos.imagem}/>
      <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
  }
const estilos= StyleSheet.create({
   
    itens:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#ECECEC',       
        alignItems:'center',
        paddingVertical:16,
        marginHorizontal:16,
    },
    imagem:{
        width:46,
        height:46,
    },
    nome:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color:'#464646'
    },
})