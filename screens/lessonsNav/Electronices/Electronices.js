import React from 'react';
import { TouchableOpacity, View,Image,Button,Text,Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

// export {Electronices1Screen,Electronices2Screen,Electronices3Screen,Electronices4Screen,Electronices5Screen,Electronices6Screen} from './electronicesLessons'


import Electronices1Screen from './electronicesLessons/Electronices1';
import Electronices2Screen from './electronicesLessons/Electronices2';
import Electronices3Screen from './electronicesLessons/Electronices3';
import Electronices4Screen from './electronicesLessons/Electronices4';
import Electronices5Screen from './electronicesLessons/Electronices5';
import Electronices6Screen from './electronicesLessons/Electronices6';

let E3array= ["counter1"];


class ElectronicesScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => { 
    return {
  title: 'الاساسيات الالكترونية',
  headerLeft : (<TouchableOpacity 
                  onPress={() => navigation.navigate('myHome')} 
                  >
                  <Text>للخلف </Text>
                  <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                 </TouchableOpacity>)
  ,headerStyle: { backgroundColor: '#f4511e' }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
//  ,drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('../../image/electronices.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       /> )
  }; 
};
  

    render() {
      
      return (
<View >
<View></View>
       <View >
        <TouchableOpacity  style={styles.container}
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-apps" size={42} color="#e67e22" />
        </TouchableOpacity>
        </View>

      <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' 
                onPress = {() => this.props.navigation.navigate('Electronices2')}
                style={styles.buttons}>
              <Text style={styles.textTitle}> الباب الثاني </Text>
              <Text style={[styles.text,{fontSize:10}]}> مقدمة عن العدد والأدوات </Text>
          </TouchableOpacity>

            <TouchableOpacity title='test ' 
                onPress = {() => this.props.navigation.navigate('Electronices1')}
                 style={styles.buttons}>
                <Text style={styles.textTitle}> الباب الأول </Text>
                <Text style={styles.text}> مقدمة عن الصيانة </Text>
            </TouchableOpacity>

    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
              <Text style={styles.text}>    الباب الرابع</Text>
              <Text style={styles.text}>  الباور سبلاي   </Text>
          </TouchableOpacity>

          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('Electronices3')} style={styles.buttons}>
              <Text style={styles.text}>  الباب الثالث </Text>
              <Text style={styles.text}>   الملتيميتر </Text>
          </TouchableOpacity>
          
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3')} style={styles.buttons}>
            <Text style={styles.text}> الباب السادس </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب الخامس </Text>
            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب التاسع </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test' 
            onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب الثامن  </Text>
            </TouchableOpacity>
    </View>

</View>
      );
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
    })

    // ,{
    //   headerMode: 'none',
    //   mode: 'modal',
    //   navigationOptions: {gesturesEnabled: false,}
    //   }
  
  const styles = {
    icon:{
      width: 24,
      height: 24,
    },
    touchable:{
      minWidth: 60
   },
    container:{
      // flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      // paddingTop:60,
      padding:20

    },
    buttons:{
    width: 150,
    height: 100,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center' ,
    backgroundColor: '#36f',
    padding: 10,
    margin:5,
    marginTop:5,
    },
    buttonCOntainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  textTitle:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent:'center' ,
    alignItems: 'center',
    textAlign: "center"
  },
  text:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent:'center' ,
    alignItems: 'center',

  }
}
  export default ElectronicesNav;