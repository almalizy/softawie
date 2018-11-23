import React from 'react';
import { View,Text,Button,TouchableOpacity,TextInput,Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import hardware from './hardware';



class _1H extends React.Component {
  //  next line only for navigation title ...

  static navigationOptions = {
    title: '_1E',
    headerTitle:'مقدمة عن صيانة الموبايل',
    headerBackTitle: '_1',  
  };

    
    
    render (){
        return (
<View>  
   

    <View style={{flexDirection: 'row',justifyContent:'center' }} > 

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_3QH')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_3H')} style={styles.buttons}>
             <Entypo  name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_2QH')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_2H')} style={styles.buttons}>
             <Entypo  name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_1QH')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_1QH')} style={styles.buttons}>
             <Entypo  name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

    </View>

    <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
       <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>الدرس الاول مقدمة عن الصيانة </Text>
    </View>

    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
                     في ظل التقدم العصري وانتشار التقنية الحديثة 
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
                  نظرا لحاجة الناس الملحة الي الموبايلات 
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              وانتشار التقنية بالشكل الذي سيطر علي الاسواق     
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
                  حتي اصبح الموبايل من ضرورات الحياة    
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                    ونظرا لعدم تقديم التوكيلات لصيانة حقيقة للموبيلات  
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                     فمن هنا ظهرت مهنة فني الصيانة او فني الصيانة البديلة 
              </Text>

                  <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              الصيانة البديلة : تعني ان تكون قادرا علي اصلاح ما تمتنع عن اصلاحه شركات صيانة المحمول  
                          </Text> 

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              لذلك يتبادر الي الذهن سؤال .
              </Text> 

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              ما هي أدوات الصيانة البديلة؟
              </Text> 
              
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               أدوات الصيانة البديلة :هي أدوات مبتكرة تعارف علي استخدامها فنيون الصيانة عبر الأجيال 
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow'}} >
                     الخلاصة :
             </Text>  

            <Text style={{ fontSize: 18 ,alignSelf:'flex-end',backgroundColor:'yellow'}} >
           الصيانة البديلة : هي اصلاح ما تمتنع وكالات الموبايل عن اصلاحه
            </Text>

          </View>

          <Button 
              title='الاستمرار' 
              style={styles.buttons}
              onPress = {() => this.props.navigation.navigate('_1Q')}
              />
              
    </View>

    

   
</View>

        );
    }
}


// السؤال الاول.......

class _1QH extends React.Component {
  static navigationOptions = {
    title: 'سؤال 1',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'ايون'&& this.state.text2 == 'بوليمر'
     ? this.props.navigation.navigate('_2H')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                 السؤال     
                      </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={4}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



// الصفحة الثانية  .........

class _2H extends React.Component {
  static navigationOptions = {
    title: 'screen 3',
    headerTintColor: 'green'
  };
  render() {
    return (
      <View>
        <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
        <Button
          onPress={() => this.props.navigation.navigate('_4E')}
          title="go to screen 4"
        />
      </View>
    );
  }
}


class _2QH extends React.Component {
  static navigationOptions = {
    title: 'سؤال 2',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'ايون'&& this.state.text2 == 'بوليمر'
     ? this.props.navigation.navigate('_2')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                 السؤال     
                      </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={4}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



class _3H extends React.Component {
  static navigationOptions = {
    title: 'screen 3',
    headerTintColor: 'green'
  };
  render() {
    return (
      <View>
        <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
        <Button
          onPress={() => this.props.navigation.navigate('_4E')}
          title="go to screen 4"
        />
      </View>
    );
  }
}

class _3QH extends React.Component {
  static navigationOptions = {
    title: 'سؤال 3',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'ايون'&& this.state.text2 == 'بوليمر'
     ? this.props.navigation.navigate('_2')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                 السؤال     
                      </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={4}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



const MyStackNav = 
StackNavigator({
  hardware:{screen:hardware},
  _1H: {screen :StackNavigator({    
               _1H:{screen:_1H},
               _1QH: {screen :StackNavigator({    
                            _1QH:{screen:_1QH},
                            _2H:{screen:StackNavigator({
                                       _2H:{screen:_2H},
                                       _2QH:{screen:StackNavigator({
                                                   _2QH:{screen:_2QH},
                                                   _3H:{screen:StackNavigator({
                                                              _3H:{screen:_3H},
                                                              _3QH:{screen:_3QH}
                                                   },{
                                                    headerMode: 'none',
                                                    mode: 'modal',
                                                    navigationOptions: {gesturesEnabled: false,}
                                                    })}
                                       },{
                                        headerMode: 'none',
                                        mode: 'modal',
                                        navigationOptions: {gesturesEnabled: false,}
                                        })},
                                                     },{
                                                      headerMode: 'none',
                                                      mode: 'modal',
                                                      navigationOptions: {gesturesEnabled: false,}
                                                      })}
                                          },{
                                            headerMode: 'none',
                                            mode: 'modal',
                                            navigationOptions: {gesturesEnabled: false,}
                                            })}         
                              },{
                                headerMode: 'none',
                                mode: 'modal',
                                navigationOptions: {gesturesEnabled: false}
                               },{
                                headerMode: 'none',
                                mode: 'modal',
                                navigationOptions: {gesturesEnabled: false,}
                                })}  });


const styles = {
  buttonCOntainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  buttons:{
      borderColor : 'red',
  }
  
}

export default MyStackNav ;

 {/* <View  style={styles.buttonCOntainer}> 
            
            <Button title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}/>
            <Button title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}/>
            <Button title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}/>
    </View> */}