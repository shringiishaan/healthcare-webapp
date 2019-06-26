import { Component, OnInit } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-medical',
  template: `
     <div class="container">
          <div class="row">
               <div class="col s12 m6 offset-m3 l4 offset-l4">
                    <h5>
                         Medical Condition
                    </h5>
                    <hr />
                    <p>
                         <b>Heart Disease : </b> {{medical_condition.heart_disease?'Positive':'Negative'}}
                    </p>
                    <p>
                         <b>Diabetics : </b> {{medical_condition.diabetics?'Positive':'Negative'}}
                    </p>
                    <p>
                         <b>High Blood Pressure : </b> {{medical_condition.blood_pressure.high_bp?'Positive':'Negative'}}
                    </p>
                    <p>
                         <b>Low Blood Pressure : </b> {{medical_condition.blood_pressure.low_bp?'Positive':'Negative'}}
                    </p>
               </div>
          </div>
     </div>
  `,
  styles: []
})

export class MedicalComponent implements OnInit {

     medical_condition: {
          heart_disease: boolean
          diabetics: boolean
          blood_pressure: {
               high_bp: boolean
               low_bp: boolean
          }          
     }

     constructor(
          public appStateService: AppStateService
     ) { }

     ngOnInit() {
          this.medical_condition = this.appStateService.appState.medical_condition
     }

}
