import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import TulparViewConfig from './TulparViewConfig';
import TulparConfig from '../TulparConfig';
import { BackHandler } from 'react-native';
const TulparWebView = (config: TulparViewConfig) => {  
  const webViewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState(TulparConfig.webViewUrl);
  const handleBackPress = () => {
    //console.log(webViewRef.current);
    if (webViewRef.current) {
      webViewRef.current.goBack(); // Eğer önceki sayfa varsa geri gider
      return true; // Android'in geri tuşunu engelle
    }
    BackHandler.exitApp();
    return true; // Eğer geri gidilecek sayfa yoksa, uygulama kapanır
  };
  useEffect(() => {
    // Android'in geri tuşunu dinle
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => {
      backHandler.remove(); // Component unmount edildiğinde dinleyiciyi kaldır
    };
  }, []);

    return (
      <WebView
        ref={webViewRef}
        source={config}
        style={{ flex: 1 }}
      />
    );
};

export default TulparWebView;
