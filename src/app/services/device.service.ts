import { Injectable } from '@angular/core';
import { Device, DeviceType } from '../model/device';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  DEVICES_URL='http://localhost:8080/devices/';

  DEVICES_TYPES_URL = 'http://localhost:8080/types/';

  constructor(private httpClient : HttpClient) { }

  getDevices() : Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.DEVICES_URL);
  }    

  getDevice(id:number) : Observable<Device> {
    return this.httpClient.get<Device>(this.DEVICES_URL+id);
  }

  addNew( device: Device )  : Observable<Device> {
    return this.httpClient.post<Device>(this.DEVICES_URL, device);
  }

  
  delete(id : number) : Observable<Device>  {
    return this.httpClient.delete<Device>(this.DEVICES_URL+id);
  } 

  update( device : Device) : Observable<Device> {
    console.log("Puttin : ", this.DEVICES_URL + device.id)
    return this.httpClient.put<Device>(this.DEVICES_URL + device.id, device );
  }

  


  /// DEVICE TYPES

  getDeviceTypes() : Observable<DeviceType[]> {
    console.log('getDeviceTypes() called')
    return this.httpClient.get<DeviceType[]>(this.DEVICES_TYPES_URL);
  }


  


}
