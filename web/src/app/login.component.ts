import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { RestService } from './rest.service';
import { AppStateService } from './app-state.service';

@Component({
     selector: 'login',
     template: `
          <div class="app-loader-wrapper" *ngIf="loader_visible">
               <div class="app-loader-icon"></div>
          </div>
          <div class="container">
               <div class="row">
                    <form class="col s12 m6 offset-m3 l4 offset-l4">
                         <div class="row" style="margin-top:3em;text-align:center;">
                              <div class="col s12">
                                   <h5>
                                        <i class="material-icons">perm_identity</i>
                                        Patient Login
                                   </h5>
                              </div>
                         </div>
                         <div class="row" style="margin-top:3em;">
                              <div class="col s12" *ngIf="error">
                                   <p style="color:red;">{{error}}</p>
                              </div>
                              <div class="input-field col s12">
                                   <input id="email" type="email" name="email" [(ngModel)]="email" autofocus required />
                                   <label for="email">Email</label>
                              </div>
                              <div class="input-field col s12">
                                   <input id="password" type="password" name="password" [(ngModel)]="password" required />
                                   <label for="password">Password</label>
                              </div>
                              <div class="input-field col s12">
                                   <a class="waves-effect waves-light btn right" (click)="login_submit()">
                                        <i class="material-icons left">perm_identity</i>
                                        Login
                                   </a>
                              </div>
                         </div>
                    </form>
               </div>
          </div>
  `,
     styles: [`
          .app-loader-wrapper {
               background-color:#fff;
               opacity:0.5;
               z-index:100;
               position:fixed;
               top:0px;
               left:0px;
               height:100% !important;
               width:100% !important;
               text-align:center;
          }

          .app-loader-icon {
               margin: 50% auto;
               border: 8px solid #f3f3f3;
               border-radius: 50%;
               border-top: 8px solid #3498db;
               width: 50px;
               height: 50px;
               -webkit-animation: spin 2s linear infinite; /* Safari */
               animation: spin 2s linear infinite;
          }

          /* Safari */
          @-webkit-keyframes spin {
               0% { -webkit-transform: rotate(0deg); }
               100% { -webkit-transform: rotate(360deg); }
          }

          @keyframes spin {
               0% { transform: rotate(0deg); }
               100% { transform: rotate(360deg); }
          }
   `]
})

export class LoginComponent implements OnInit {

     loader_visible: boolean

     email: string

     password: string

     error: string

     constructor(
          public appStateService: AppStateService,
          public authService: AuthService,
          public rest: RestService
     ) { }

     ngOnInit() { }

     ngAfterViewInit() {
     }

     login_submit() {
          if(this.validate_email()) {
               if(this.validate_password()) {
                    this.error = null
                    this.loader_visible = true
                    this.authService.authenticateUser(this.email, this.password).then((success: boolean) => {
                         if(success) {
                              this.rest.getPatientHealthInfo(this.email).then((state: AppState) => {
                                   if(state) {
                                        this.appStateService.appState = state
                                        this.authService.login = true
                                   }
                              }, error => this.error=error)
                         }
                         else (
                              this.error = "Login Unsuccessfull"
                         )
                    }, (error) => this.error=error).finally(() => {
                         this.loader_visible = false
                    })
               }
          }
     }

     validate_email(): boolean {
          if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
               return true
          else {
               this.error = "Invalid Email ID"
               return false
          }
     }

     validate_password(): boolean {
          if(!this.password) {
               this.error = "Please enter password"
               return false
          }
          else if(this.password.length<=6) {
               this.error = "Password must be atleast 6 characters long"
               return false
          }
          else if(this.password===this.password.toLowerCase()) {
               this.error = "Password must contain atlest one uppercase character"
               return false
          }
          return true
     }
}
