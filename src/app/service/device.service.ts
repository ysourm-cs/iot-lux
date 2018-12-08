import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Device } from '../model/device';
import { ServicesService } from './services.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient,
              private service: ServicesService) { }

  getDevice(id: number): Observable<Device> {
    const deviceUrl = `${this.service.getDeviceUrl()}/${id}`;
    return this.http.get<Device>(deviceUrl)
      .pipe(catchError(this.service.handleError<any>('getDevice', null)));
  }
  
  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.service.getDeviceUrl())
     .pipe(catchError(this.service.handleError<any>('getDevices', null)));
  }

  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device[]>(this.service.getDeviceUrl(), device)
      .pipe(catchError(this.service.handleError<any>('addDevice', null)));
  }

  updateDevice(device: Device): Observable<any> {
    return this.http.put(this.service.getDeviceUrl(), device, httpOptions)
      .pipe(catchError(this.service.handleError<any>('updateDevice', null)));
  }

  deleteDevice(id: number): Observable<any> {
    const deviceUrl = `${this.service.getDeviceUrl()}/${id}`;
    return this.http.delete<any>(deviceUrl)
      .pipe(catchError(this.service.handleError<any>('deleteDevice', null)));
  }

  openDevice(id: number): Observable<Device> {
    const deviceUrl = `${this.service.getDeviceUrl()}/${id}/open`;
    return this.http.put<Device>(deviceUrl, id)
      .pipe(catchError(this.service.handleError<any>('openDevice', null)));
  }

  closeDevice(id: number): Observable<Device> {
    const deviceUrl = `${this.service.getDeviceUrl()}/${id}/close`;
    return this.http.put<Device>(deviceUrl, id)
      .pipe(catchError(this.service.handleError<any>('closeDevice', null)));
  }

  openAllDevices(id: number): Observable<Device[]> {
    const url = `${this.service.getRoomUrl()}/${id}/open`;
    return this.http.put<Device[]>(url,id)
      .pipe(catchError(this.service.handleError<any>('openAllDevices', null)));
  }

  closeAllDevices(id: number): Observable<Device[]> {
    const url = `${this.service.getRoomUrl()}/${id}/close`;
    return this.http.put<Device[]>(url,id)
      .pipe(catchError(this.service.handleError<any>('closeAllDevices', null)));
  }

  getDevicesByUserId(id: number): Observable<Device[]> {
    const url = `${this.service.getUserUrl}/${id}/devices`;
    return this.http.get<Device[]>(url)
      .pipe(catchError(this.service.handleError<any>('getDevicesByUserID', null)));
  }

  getDevicesByRoomId(id: number): Observable<Device[]> {
    const url = `${this.service.getRoomUrl}/${id}/devices`;
    return this.http.get<Device[]>(url)
     .pipe(catchError(this.service.handleError<any>('getDevices', null)));
  }
}