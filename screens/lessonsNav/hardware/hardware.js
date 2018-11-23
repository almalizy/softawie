import React from 'react';
import { TouchableOpacity, View,Image,Button,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class hardware extends React.Component {
  
  static navigationOptions = ({ navigation }) => { 
    return {
  title: 'الهاردوير',
  headerLeft : (<Button 
                  onPress={() => navigation.navigate('myHome')} 
                  title = "للخلف" />)
  ,headerStyle: { backgroundColor: 'red' }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
  ,Icon: () => (<Entypo  name='grid' />)
 ,drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../image/hardware.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /> )
    , tabBarIcon: () => (<Entypo  name='grid' />),
  }; 
};
  
    render() {
      
      return (
<View >
<View style={styles.container}>
     
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </TouchableOpacity>
        </View>

      <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2H')} style={styles.buttons}>
          <Text style={styles.textTitle}> الباب الثاني </Text>
          <Text style={styles.text}> العدد والأدوات </Text>

            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_1H')} style={styles.buttons}>
            <Text style={styles.textTitle}> الباب الأول </Text>
            <Text style={styles.text}> مقدمة عن الصيانة </Text>

            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_4H')} style={styles.buttons}>
            <Text style={styles.text}>   الباب الرابع </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3H')} style={styles.buttons}>
            <Text style={styles.text}> الباب الثالث </Text>
            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب السادس </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب الخامس </Text>
            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب الثامن </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب التاسع </Text>
            </TouchableOpacity>
    </View>

</View>
      );
    }
  }
  
  const styles = {
    icon:{
      width: 24,
      height: 24,
    },
    touchable:{
      minWidth: 60
   },
    container:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:60,
      padding:20

    },
    buttons:{
    width: 150,
    height: 100,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
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
  },
  text:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',

  }
}
  export default hardware;