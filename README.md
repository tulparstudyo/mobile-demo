# Kurulum
    npx @react-native-community/cli@latest init demo
    npm i --save "firebase" "react" "react-native"  "react-native-safe-area-context"  "@react-navigation/native" "@react-navigation/native-stack" "react-native-screens" "react-native-webview" "react-native-push-notification" "@react-native-firebase/app" "@react-native-firebase/messaging" "@types/react-native-push-notification" "@react-native-community/push-notification-ios"
### Paketleri Güncelleme
    npm install
    npm update
    npm i --legacy-peer-deps
### Tulpar reposity klonla
``git clone https://github.com/tulparstudyo/mobile-demo.git tulpar``<br>
### App.tsx
```
/**
 * Tulpar Studyo Wenbview App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TulparStarter from './tulpar/TulparStarter';

function App(): React.JSX.Element {
  return (
    TulparStarter()
  );
}

export default App;
```


# <img src="https://www.gstatic.com/devrel-devsite/prod/vdf5af65c45d9e2fdd493c581ff01cb1d11a21b4420a9fcc957400a26863da9d2/android/images/favicon.svg" alt="Android Icon" width="32" height="32"> Android
``android.enableJetifier=true`` #android/gradle.properties<br>
``classpath("com.google.gms:google-services:4.4.2")`` #android/build.gradle<br>
``apply plugin: "com.google.gms.google-services"`` #android/app/build.gradle<br>
``android\app\build.gradle``#android namespace değiştirme. Ayrıca android\app\src\main\java\com\demo\* içindeki dosyalarda<br>
``android\app\google-services.json`` #firebase consol hesabınızdan indiriniz<br>
``//context.sendBroadcast(new Intent(Intent.ACTION_CLOSE_SYSTEM_DIALOGS));`` #Yoruma al. node_modules\react-native-push-notification\android\src\main\java\com\dieam\reactnativepushnotification\modules\RNPushNotificationActions.java
### AndroidManifest.xml ile kanal için yetki ekleyin<br>
``<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />``<br>
``<uses-permission android:name="android.permission.VIBRATE" />``<br>
### projeyi gradle ile derleyin
``./gradlew clean`` #çözmedi<br>
``./gradlew assembleDebug`` #çözmedi<br>
``./gradlew :app:dependencies``<br>
``./gradlew build --scan`` #komut tekrar çalıştırıldı ve uzun sürdü ama "yes" komutu verildi. çözüldü<br>
``npx react-native run-android --verbose`` #sorunsuz tamamlandı
 
npm start çalıştı :)<br>
### proje apk sı oluşturma
npx react-native build-android --mode=release
### Ekran 
<img src="https://raw.githubusercontent.com/tulparstudyo/mobile-demo/refs/heads/main/assets/image/preview-android.jpeg" width="200"> <img src="https://raw.githubusercontent.com/tulparstudyo/mobile-demo/refs/heads/main/assets/image/preview-android-1.jpeg" width="200"> <img src="https://raw.githubusercontent.com/tulparstudyo/mobile-demo/refs/heads/main/assets/image/preview-android-2.jpeg" width="200">
# <img src="https://developer.apple.com/favicon.ico" alt="Ios Icon" width="32" height="32"> Ios
Cocoapodsu otomatik kurma!
``bundle install``
``org.reactjs.native.example`` #ios/lorem.xcodeproj/project.pbxproj içinde native exampleyi değiştir.
``bundle exec pod install`` 
``use_frameworks!`` #podfile'a yaz
``#import "Firebase.h"`` #Appdelagateye ekle
``GoogleService-Info.plist`` #dosyasını projeye dahil etmek için xcode açın
``Singing&Capabilities`` #Xcode'den Push Notification ve Background Modesi ekle


