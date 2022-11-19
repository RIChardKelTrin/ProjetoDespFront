import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';
import React, { Component, useEffect, useState } from "react";
import Api from "../../Services/Api";


export default function Search(){

    const [svID, setSvID] = useState(0);

    const get =  async() => {
        try{
        const {data} = await Api.getSvById(svID)
        console.log(data)
        }
        catch(erro){
            console.log("Não foi possível consultar:" + erro)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.consulta}>
            <TextInput
            style={styles.input} 
            placeholder='Digite o id do SV...'
            onChangeText={(id) => setSvID(id)}
            keyboardType={"numeric"}
            />
            <TouchableOpacity style={styles.buscar} onPress={() => get()}>
                <Feather name="search" size={30} color={'white'}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        justifyContent:"center",
        alignItems:'center',
        marginBottom:30
    },
    consulta:{
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    input:{
        width:"80%",
        height:40,
        borderColor:'black',
        borderWidth:1,
        marginEnd:10,
        borderRadius:100,
        paddingStart:10,
        paddingEnd:10,
        backgroundColor: '#fafafa'
    },
    buscar:{
        width:40,
        height:40,
        backgroundColor:"#f70b17",
        borderRadius: 100,
        alignItems:"center",
        justifyContent:"center"

    }
})