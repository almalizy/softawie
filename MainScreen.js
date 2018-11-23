import _ from 'lodash';
import React, { Component } from 'react';
import { Image} from 'react-native';
import Slides from './Slides';
import Icon from 'react-native-vector-icons/FontAwesome';

import firstImage from "./assets/1.png";
const secoundImage = require("./assets/2.png");
const thirdImage = require("./assets/3.jpg");

const firstLogo = require("./assets/logo-kitchen-sink.png");
const twoLogo = require("./assets/logo-kitchen-sink.png");
const threeLogo = require("./assets/logo-kitchen-sink.png");



const SLIDE_DATA = 
[
  { text: ' أول تطبيق لتعليم صيانة المحمول', color: 'black',imageBackground:firstImage ,imageLogo:firstLogo },
  { text: 'كل ما تحتاجه لتعلم الصيانة ', color: 'black',imageBackground:secoundImage, imageLogo:twoLogo},
  { text: 'HARDWARE هاردوير' + '\n\t\t' + '\n' + 'SOFTWARE سوفت وير ', color:'black',imageBackground:thirdImage,imageLogo:threeLogo}
];

class MainScreen extends Component {
  static navigationOptions = {
      
    title: 'الرئيسة',
    drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./screens/image/tools.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
       tabBarIcon: () => (<Icon  name='home' 
      />),
      
      };
      
  onSlidesComplete = () => {
    // this.props.navigation.navigate('Home'),Alert.alert('مرحبا بكم في شركة تمكين الشاملة المحدودة');
    this.props.navigation.navigate('myLogin');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} 
              onComplete={this.onSlidesComplete}
              style={{justifyContent:'center',alignItems:'center'}}
              />

    );
  }
}

styles={
  icon:{
    width: 24,
    height: 24,
    // tintColor:'white'
  },
}
export default MainScreen ;
