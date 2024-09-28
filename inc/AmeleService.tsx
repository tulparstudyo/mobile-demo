import { Alert, Platform, ToastAndroid } from "react-native";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import WebService from "./WebService";
import TulparConfig from "../TulparConfig";

class AmeleService{

    static async requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if(!enabled) {
          this.notifyMessage('Bildirim izinlerinizi kontrol ediniz!.');
        }
    }
    static createNotifyChannel(channelId:string, channelName:string) {
        if (Platform.OS === 'android' && Platform.Version >= 26) {
          PushNotification.createChannel(
            {
              channelId: channelId,
              channelName: channelName,
              importance: 4,
              vibrate: true,
            },
            (created: any) => console.log(`createChannel returned '${created}'`)
          );
        }
    }
    static catchNotifyMessage(){
        return messaging().onMessage(async remoteMessage => {
          try{
            PushNotification.localNotification({
                channelId: TulparConfig.channelId, // Bildirim kanalı
                smallIcon: "ic_notification", // Bildirim ikonu (Android için)
                title: remoteMessage.notification.title,
                message: remoteMessage.notification.body,
                bigText: remoteMessage.notification.body, // For larger notifications
                priority: "high", // Bildirimin öncelik seviyesi
                vibration: 1000, // Titreşim süresi (ms)
                vibrate: true, // Titreşimi aktif et
                playSound: true, // Ses çal
                soundName: "default", // Varsayılan ses
                autoCancel: true, // Bildirim tıklandığında otomatik olarak kapatılır
              });

          } catch (error) {
              console.log("Mesaj gösterilemedi")
          }

          try{
            if( remoteMessage.data!='undefined' ){
              if(remoteMessage.data.callback!='undefined'){
                WebService.getDataFromAPI(remoteMessage.data.callback, [], null)
              }
            }
          } catch {
            console.log("Geri dönüş yapılamadı")
          }

          });
    }
    static notifyMessage(msg: string) {
        if (Platform.OS === 'android') {
          ToastAndroid.show(msg, ToastAndroid.SHORT);
        } else {
          Alert.alert(msg);
        }
    }
}

export default AmeleService;
