//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Linking, BackHandler,Alert} from 'react-native';

import firebase from '../firebase';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';

// create a component
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: null
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }else {
                this.setState({ loggedIn: false });
            }
        });
    }

    showContnets() {
        switch(this.state.loggedIn) {
            case true: 
                return (
                    <View style={styles.logoutContainer}>
                        <Button onPress={() => firebase.auth().signOut()}>تسجيل الخروج</Button>
                    </View>
                );
            case false: 
                return <LoginForm />;
            default: 
                return <Spinner />;
        }
    }
    
    // the next part for canceled retrun back but not working yet ...

  componentWillMount() {
    setTimeout(() => {
      BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
    }, 800);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    Alert.alert(
      'هل ترغب في مغادرة التطبيق ',
      'هل ترغب في مغادرة التطبيق',
      // { text: 'للتسجيل ', onPress: () => Linking.openURL('http://tamkeen.sa/adv.html') },
      [ 
        { text: ' التقييم', onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=www.tamkeen.sa.com') },
        { text: 'نعم', onPress: () => BackHandler.exitApp() },
        { text: 'لا', onPress: () => Alert.alert('استمتع بتصفح تطبيق سوفتاوي'), style: 'cancel' },
       ],
      { cancelable: false }

    );
    return true;
    }
// finished here ........

    render() {
        return (
            <View style={styles.container}>
                <Header title='التسجيل' />
                { this.showContnets() }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoutContainer: {
        height: 80,
        margin: 10
    }
});

//make this component available to the app
export default App;
