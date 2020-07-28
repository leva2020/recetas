import { DeviceDetectorService } from 'ngx-device-detector'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalDeviceDetectorService {

  constructor(private deviceService: DeviceDetectorService) { }

  isMobile() {
    return this.deviceService.isMobile()
  }

  isTablet() {
    return this.deviceService.isTablet()
  }

  isDesktop() {
    return this.deviceService.isDesktop()
  }
}
