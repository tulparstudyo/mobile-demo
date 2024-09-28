import TulparWebView from "../inc/TulparWebView.tsx";
import TulparConfig from '../TulparConfig.tsx';
import TulparViewConfig from "../inc/TulparViewConfig.tsx";

const HomeScreen=( { route  } )=> {
    const config = new TulparViewConfig();
    config.setUri(TulparConfig.webViewUrl + '?mobileLogin=1')
    config.addHeader('fcmtoken', route.params.fcmToken)
    config.addHeader('mobileapp', 'tulpar')
    return (
        TulparWebView(config)        
    );
}

export default HomeScreen;