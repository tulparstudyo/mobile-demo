import TulparConfig from '../TulparConfig.tsx';

class WebService {

    static async getDataFromAPI(service: string, data: { [key: string]: string }): Promise<any> {
        
        try {
            //console.log(TulparConfig.apiServer + service)
            const response: Response = await fetch(TulparConfig.apiServer + service, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                //throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const jsonData: any = await response.json();
            return jsonData;  // Fonksiyonun veriyi döndüreceği kısım
        } catch (error) {
            //throw error;
        }
    }
}

export default WebService;
/**
const data = await WebService.getDataFromAPI('serviceName', {key1: 'value1', key2: 'value2'});
console.log(data);
 */