import React from 'react';
import { TouchableOpacity,Text,Alert } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import ElectronicesScreen from './ElectronicesScreen';
import Electronices1Screen from './electronicesLessons/elec1/Electronices1';
import Electronices2Screen from './electronicesLessons/elec2/Electronices2';
import Electronices3Screen from './electronicesLessons/elec3/Electronices3';
import Electronices4Screen from './electronicesLessons/elec4/Electronices4';
import Electronices5Screen from './electronicesLessons/elec5/Electronices5';

export default class RootStack extends React.Component{
  static navigationOptions = ({ navigation }) => { 
    return {
      title: 'الاساسيات الالكترونية',
      headerLeft : ( <TouchableOpacity 
                       onPress={() => navigation.navigate('myHome')}  >
                      <Text> للخلف </Text>
                      <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                    </TouchableOpacity> )
      ,headerStyle: { backgroundColor: '#f4511e' }
      ,headerTintColor: '#fff'
      ,headerTitleStyle: { fontWeight: 'bold'}
      }; 
    };
  render(){
    return (
      <ElectronicesNav/>
    )
  }
}




const ElectronicesNav = StackNavigator({
    Electronices: ElectronicesScreen,
    Electronices1: StackNavigator({
      Electronices1:Electronices1Screen,
      Electronices2:StackNavigator({
        Electronices2:Electronices2Screen,
        Electronices3:StackNavigator({
          Electronices3:Electronices3Screen,
          Electronices4:StackNavigator({
            Electronices4:Electronices4Screen,
            Electronices5:Electronices5Screen
          },{
            headerMode: 'none',
            mode: 'modal',
            navigationOptions: {gesturesEnabled: false,}
            })
        },{
          headerMode: 'none',
          mode: 'modal',
          navigationOptions: {gesturesEnabled: false,}
          })
      },{
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {gesturesEnabled: false,}
        })
    },{
      headerMode: 'none',
      mode: 'modal',
      navigationOptions: {gesturesEnabled: false,}
      })
  },{
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {gesturesEnabled: false,}
    },{ initialRouteName:'Electronices'})

    // ,{
    //   headerMode: 'none',
    //   mode: 'modal',
    //   navigationOptions: {gesturesEnabled: false,}
    //   }
  
  
