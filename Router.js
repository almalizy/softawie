import MyHomeScreen from './screens/MyHomeScreen';
import MyLoginScreen from './screens/MyLoginScreen';

import contactUs from './screens/contactUs';
import aboutDevoloper from './screens/aboutDevoloper';

import hardwareNave from './screens/lessonsNav/hardware/hardwareNave';
import ElectronicesScreen from './screens/lessonsNav/Electronices/Electronices';
import softWareScreen from './screens/lessonsNav/SoftWare/SoftWare';
import Tools from './screens/lessonsNav/Tools/Tools';

import MainScreen from './MainScreen';
import { DrawerNavigator } from 'react-navigation';

const MainNavigator = DrawerNavigator({
     Main: { screen: MainScreen },
     myLogin : {screen: MyLoginScreen },
     myHome : {screen: MyHomeScreen },
    //  Tools:{screen:Tools},
    //  software:{screen:softWareScreen},
    //  Electronices:ElectronicesScreen,
      second: {screen: contactUs }
     ,third:{screen : aboutDevoloper},

        },{    initialRouteName: "Main",
    })


       
    

export default MainNavigator;