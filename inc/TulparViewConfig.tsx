class TulparViewConfig{
    uri:string=' '
    headers: { [key: string]: string } = {};

    setUri(webViewUrl:string){
        this.uri = webViewUrl
    }
    addHeader(key:string, value:string){
        this.headers[key.toLowerCase()] = value;
    }
    removeHeader(key:string, value:string){
        delete this.headers[key.toLowerCase()];
    }
    getHeader(key:string){
        return this.headers[key.toLowerCase()];
    }
    getHeaders(){
        return this.headers;
    }
}
export default TulparViewConfig;