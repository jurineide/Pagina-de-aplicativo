import React from 'react';
import Texto from "../../../components/Texto";
import { Image, View, StyleSheet } from "react-native";



export default function Detalhes ({nome, logoFazenda, nomeFazenda, descricao, preco}){
    return<>
     <Texto style={estilos.nome}>{nome} </Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imgFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>        
        </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}
 const estilos= StyleSheet.create({
    nome:{
        fontSize:26,
        color:'#464646',
        lineHeight:42,        
        fontWeight:'bold'
        
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        
    },
    imgFazenda:{
        width:32,
        height:32,
    },
    fazenda:{
        flexDirection:'row',
        paddingVertical:12,
        
    },
    descricao:{
        color:'#A3A3A3',
        fontSize:16,
        lineHeight:16,
       
    },
    preco:{
        color:'#2A9F85',
        fontWeight:'bold',
        paddingVertical:12,
    }
 })