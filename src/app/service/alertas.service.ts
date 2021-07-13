import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: String, type: String){
const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
bsModalRef.content.type = type
bsModalRef.content.message = message
  }

  showAlertDanger(message: String){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: String){
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: String){
    this.showAlert(message, 'info')
  }
}
