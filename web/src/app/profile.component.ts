import { Component, OnInit } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'profile',
  template: `
     <div class="container">
          <div class="row">
               <div class="col s12 m6 offset-m3 l4 offset-l4">
                    <h5>
                         <i class="material-icons">perm_identity</i>
                         Profile - {{patient.name}}
                    </h5>
                    <hr />
                    <p>
                         <b>E-Mail : </b> {{patient.email}}
                    </p>
                    <p>
                         <b>Phone : </b> {{patient.phone}}
                    </p>
                    <p>
                         <b>Age : </b> {{patient.age}} years
                    </p>
               </div>
          </div>
     </div>
  `,
  styles: []
})

export class ProfileComponent implements OnInit {

     patient: {
          name: string
          email: string
          phone: string
          age: number
     }

     constructor(
          public appStateService: AppStateService
     ) { }

     ngOnInit() { 
          this.patient = this.appStateService.appState.patient
     }

}
