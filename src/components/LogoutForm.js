//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import firebase from '../firebase';

import { Card, CardItem, Button, Input, Spinner } from './common';


// create a component
export default class LogoutForm extends Component {
  

                            
   

    render() {
        return (
            <View >
            <Button 
            onPress={() => firebase.auth().signOut() }
            title="logout"/>
            <Button 
            onPress={() =>this.props.navigation.navigate('myHome')}>
            الاستمرار
            </Button>
        </View>  
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#FF0000',
        marginTop: 5
    },
});


//make this component available to the app
{/* <View style={styles.logoutContainer}>
                            <Button 
                            onPress={() => firebase.auth().signOut() }
                            style={styles.logoutContainer}
                            title="logout"/>
                            <Button 
                            onPress={() =>this.props.navigation.navigate('myHome')}>
                            الاستمرار
                            </Button>
                        </View> */}