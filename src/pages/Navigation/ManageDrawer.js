import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Manage from '../Manage';
import Profile from '../Profile';
import AddReport from '../AddReport';
import AddProperty from '../AddProperty';

const Drawer = createDrawerNavigator();

const ManageDrawer = () => {
    return( 
        <Drawer.Navigator initialRouteName="AddReport">
      <Drawer.Screen name="AddReport" component={AddReport} />
      <Drawer.Screen name="AddProperty" component={AddProperty} />
    </Drawer.Navigator>
    )
}


export default ManageDrawer;