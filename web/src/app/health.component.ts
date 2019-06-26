import { Component, OnInit } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-health',
  template: `
     <div class="container">
          <div class="row">
               <div class="col s12 m6 offset-m3 l4 offset-l4">
                    <h5>
                         Health Status
                    </h5>
                    <hr />
                    <p>
                         <b>Height : </b> {{health_status.height}}
                    </p>
                    <p>
                         <b>Weight : </b> {{health_status.weight}}
                    </p>
                    <p>
                         <b>Pulse Rate : </b> {{health_status.pulse_rate}}
                    </p>
                    <p>
                         <b>Blood Pressure : </b> {{health_status.bp}}
                    </p>
                    <p>
                         <b>Body Mass Index (BMI) : </b> {{health_status.bmi}}
                    </p>
               </div>
          </div>
     </div>
  `,
  styles: []
})

export class HealthComponent implements OnInit {

     health_status: {
          height: string
          weight: string
          pulse_rate: string
          bp: string
          bmi: number
     }

     constructor(
          public appStateService: AppStateService
     ) { }

     ngOnInit() { 
          this.health_status = this.appStateService.appState.health_status
     }
}
