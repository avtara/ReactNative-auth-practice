import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const Header = (props) => {
    return (
    <View style={Styles.viewStyle}>
    <Text style={Styles.text}>{props.HeaderText}</Text>
    </View>
);
};

const Styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#F8F8F8',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        paddingTop:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity: 0.2,
        elevation:2,

    },
    text:{
        fontSize : 20,
    }
});

export {Header};