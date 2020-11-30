import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonationScreen from '../screens/bookdonateScreen';
import BookRequestScreen from '../screens/bookrequestScreen';

export const AppTabNavigator= createBottomTabNavigator({
donate:{screen:BookDonationScreen,
navigationOptions:{
    tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:20,height:20}} /> ,
    tabBarLabel:"Donate Books"    
}
},
bookRequest:{screen:BookRequestScreen,
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20,height:20}} />,
        tabBarLabel:"Request Books"  
    }
}
})