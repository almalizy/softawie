import React from 'react';
import { View,Text,Button,TouchableOpacity,TextInput,Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Electronices from './Electronices'



// الصفحة الاولي

 class _1E extends React.Component {
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
             onPress = {() => this.props.navigation.navigate('_3QE')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_3E')} style={styles.buttons}>
             <MaterialCommunityIcons  name="numeric-3-box" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_2QE')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_2E')} style={styles.buttons}>
             <MaterialCommunityIcons  name="numeric-2-box" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_1QE')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_1QE')} style={styles.buttons}>
            <MaterialCommunityIcons  name="numeric-1-box" size={32} color="black" />
        </TouchableOpacity>

    </View>

    <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
       <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>الدرس الاول مقدمة عن الصيانة </Text>
    </View>

    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
                     في ظل التقدم العصري وانتشار التقنية الحديثة 
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
                  نظرا لحاجة الناس الملحة الي الموبايلات 
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              وانتشار التقنية بالشكل الذي سيطر علي الاسواق     
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center',textAlign: "right"}} >
                  حتي اصبح الموبايل من ضرورات الحياة    
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
                    ونظرا لعدم تقديم التوكيلات لصيانة حقيقة للموبيلات  
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
                     فمن هنا ظهرت مهنة فني الصيانة{'\n'} او فني الصيانة البديلة 
              </Text>

                  <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              الصيانة البديلة : تعني ان تكون قادرا علي اصلاح ما تمتنع عن اصلاحه شركات صيانة المحمول    
                        </Text> 

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              لذلك يتبادر الي الذهن سؤال .
              </Text> 

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              ما هي أدوات الصيانة البديلة؟
              </Text> 
              
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
               أدوات الصيانة البديلة :هي أدوات مبتكرة تعارف علي استخدامها فنيون الصيانة عبر الأجيال 
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow',textAlign: "right"}} >
                     الخلاصة :
             </Text>  

            <Text style={{ fontSize: 18 ,alignSelf:'flex-end',backgroundColor:'yellow',textAlign: "right"}} >
           الصيانة البديلة : هي اصلاح ما تمتنع وكالات الموبايل عن اصلاحه
            </Text>
            
          </View>

          <Button 
              title='الاستمرار' 
              style={styles.buttons}
              onPress = {() => this.props.navigation.navigate('_1QE')}
              />
              
    </View>

    

    <View  style={{ 
       flex: 3,
       flexDirection:'row',
       alignItems:'center',
       margin:150 ,
       left:140
        
       }}> 

  
           
    </View>
</View>

        );
    }
}


// السؤال الاول.................................................

class _1QE extends React.Component {
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
     this.state.text1 == 'البديلة'
     ? this.props.navigation.navigate('_2E')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
<View >
        <Text style={{ fontSize: 22 ,alignItems:'flex-end',textAlign: "right"}} >
     يسمى اصلاح ما تمتنع وكالات الموبايل عن اصلاحه بالصيانة      
     <TextInput
                  style={{height: 40,width:80,alignSelf:'center',left:150,
                fontSize: 22 ,textAlign: "right"}}
                  placeholder='_._._ '
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={7}    
            /> 
     </Text>

           
    
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

class _2E extends React.Component {
  static navigationOptions = {
    title: 'صيانة الموبيلات',
    headerTintColor: 'green'
  };
  render() {
    return (
      
        
    <View > 

       <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
       <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}> امتناع الشركات عن صيانة الموبيلات  </Text>
    </View>

           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
          رغم توافر كافة  المعلومات لدي شركات الصيانة عن منتجاتها    
          </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
            ورغم قدرة الشركات علي توفير كافة المعدات اللازمة للصيانة 
             </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
            وكذلك قدرة الشركات علي توفير كافة قطع الغيار   
           </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center',textAlign: "right"}} >
          الا ان الشركات تمتنع عن تقديم صيانة كاملة للموبيلات     
              </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
            وتنحصر صيانة الشركات او الوكلاء في تغيير المكونات الخارجية 
            لكنها تمتنع تماما عن تقديم اي اصلاحات في اللوحة الام 
             </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
                     .اللوحة الأم هي المسماةالبورد 
                                     
                      {'\n'} (Mother board )او بالانجليزية   
              </Text>

                 
            
          </View>

          <Button 
              title='الاستمرار' 
              style={styles.buttons}
              onPress = {() => this.props.navigation.navigate('_1QE')}
              />
              
    </View>
    );
  }
}


class _2QE extends React.Component {
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
                 السؤال الثاااني     
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

// الصفحة الثالثة ...................................

class _3E extends React.Component {
  static navigationOptions = {
    title: '   اسباب امتناع الشركات عن الصيانة',
    headerTintColor: 'green'
  };
  render() {
    return (
  <View>
         <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
            <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}> امتناع الشركات عن صيانة الموبيلات  </Text>
        </View>

        <View style={{right:10}}>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              ما هي أهم الاسباب التي تمنع الشركات من تقديم صيانة حقيقية   
                     </Text> 

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
            1- اسباب اقتصادية :        
              </Text> 

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              - مثل التصنيع اقل تكلفة من الاصلاح
              {'\n'}  
              - دفع المستخدمين الي شراء المنتجات الجديدة 
            </Text> 
              
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              2- أسباب فنية :
             </Text>

              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
              - عدم القدرة علي تقديم معايير ثابتة لضمان الاجهزة بعد اصلاحها  
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow',textAlign: "right"}} >
           الخلاصة: {'\n'}
           اسباب امتناع الشركات عن الصيانة : {'\n'}
           - التصنيع ارخص من الاصلاح {'\n'}
           - لا يمكن تقديم ضمان لما تم اصلاحه {'\n'}
           - تسويق المنتجات الجديدة {'\n'}
           </Text>  

            <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
            لكن بالرغم من ذلك 
            {'\n'} اثبتت الصيانة البديلة وجودها ونجاحها في توفير ما امتنعت الشركات عن تقديمه وهو الصيانة الحقيقة للموبيلات           
            </Text>
          </View>
          <Button 
              title='الاستمرار' 
              style={styles.buttons}
              onPress = {() => this.props.navigation.navigate('_3QE')}
              />
      </View>
    );
  }
}

// السوال الثالث 

class _3QE extends React.Component {
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
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
        الخلاصة: {'\n'}
           اسباب امتناع الشركات عن الصيانة : {'\n'}
           - التصنيع ارخص من الاصلاح {'\n'}
           - لا يمكن تقديم ضمان لما تم اصلاحه {'\n'}
           - تسويق المنتجات الجديدة {'\n'}     
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
  Electronices:{screen:Electronices},
  _1E: {screen :StackNavigator({    
               _1E:{screen:_1E},
               _1QE: {screen :StackNavigator({    
                            _1QE:{screen:_1QE},
                            _2E:{screen:StackNavigator({
                                       _2E:{screen:_2E},
                                       _2QE:{screen:StackNavigator({
                                                   _2QE:{screen:_2QE},
                                                   _3E:{screen:StackNavigator({
                                                              _3E:{screen:_3E},
                                                              _3QE:{screen:_3QE}
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