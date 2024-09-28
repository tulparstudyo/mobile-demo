import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { View, ActivityIndicator } from 'react-native';

import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import AmeleService from './inc/AmeleService';
import TulparConfig from './TulparConfig';

let fcmToken: string
const NavigationStart=({ navigation })=> {
  useEffect(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home', params: { fcmToken: fcmToken } }, // Hedef ekranı ve parametreleri belirtiyoruz
        ],
      })
    );

  }, []);
  return (        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#ff00ff" />
  </View>);
}

const TulparStarter = () => {  
  useEffect(() => {
    AmeleService.requestUserPermission();
    AmeleService.createNotifyChannel(TulparConfig.channelId, TulparConfig.channelName);
    return AmeleService.catchNotifyMessage();
  }, []);
   const Stack = createNativeStackNavigator();
   const [loading, setLoading] = useState(true); // WebView yüklenmesini kontrol etmek için
    useEffect(() => {
      const getFcmToken = async () => {
        try {
          const token = await messaging().getToken();
          fcmToken = token;
          setLoading(false); 
        } catch (error) {
          console.error('FCM token alma hatası:', error);
        }
      };
  
      getFcmToken();
    }, []);
  
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
          <Stack.Screen options={{ headerShown: false }} name="Start" component={NavigationStart} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default TulparStarter;
