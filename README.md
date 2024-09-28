# ÖZET
    npx @react-native-community/cli@latest init AwesomeProject
    npm i --save "firebase" "react" "react-native"  "react-native-safe-area-context"  "@react-navigation/native" "@react-navigation/native-stack" "react-native-screens" "react-native-webview" "react-native-push-notification" "@react-native-firebase/app" "@react-native-firebase/messaging" "@types/react-native-push-notification" "@react-native-community/push-notification-ios"


# Derleme
   npm i --legacy-peer-deps
# Android
``android.enableJetifier=true #android/gradle.properties``<br>
``classpath("com.google.gms:google-services:4.4.2")`` #android/build.gradle json<br>
``apply plugin: "com.google.gms.google-services"`` #android/app/build.gradle json<br>
``android\app\build.gradle``#android namespace değiştirme <br>
``android\app\google-services.json`` firebase consol hesabınızdan indiriniz<br>
AndroidManifest.xml ile kanal için yetki ekleyin<br>
``<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />``<br>
``<uses-permission android:name="android.permission.VIBRATE" />``<br>
./gradlew clean #çözmedi<br>
./gradlew assembleDebug<br>
./gradlew :app:dependencies #çözmedi<br>
./gradlew build --scan #çözmedi. yes komutu verildi. komut tekrar çalıştırıldı ve uzun sürdü ama çözüldü ve<br>
npm start çalıştı :)<br>
