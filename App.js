import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer,  } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RNCamera } from 'react-native-camera';


class Books extends React.Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Books Screen</Text>
      </View>
      );
  }
}

class Camera extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
        >
        </RNCamera>
      </View>
    );
  }
}
class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Setting Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  errorMsg:{
    color:'red',
    fontSize:28,
  },
});
const tabNavigator  = createMaterialBottomTabNavigator (
  {
    Books: Books,
    Camera: Camera,
    Settings: Settings,

},
{
   defaultNavigationOptions: ( {navigation} ) => ({
     tabBarIcon: ({ focused, horizontal, tintColor }) => {
       const { routeName } = navigation.state;
       let IconComponent = Icons;
       let iconName;
       if (routeName === 'Camera') {
         iconName = `camera${focused ? '' : '-outline'}`;

        // IconComponent = HomeIconWithBadge;
       } else if (routeName === 'Books') {
         iconName = `book${focused ? '' : '-outline'}`;
       }else if(routeName === "Settings"){
            iconName = `settings${focused ? '' : '-outline'}`;
       }

       // You can return any component that you like here!
       return <IconComponent name={iconName} size={25} color={tintColor} />;
     },

   }),
   initialRouteName: "Camera",
   shifting:true,
   activeColor: '#1eba86',
   inactiveColor: 'white',
   barStyle: {
     backgroundColor: '#00112b',
     paddingBottom:5,
     paddingTop:5,
    },


 }
);

export default createAppContainer(tabNavigator);
