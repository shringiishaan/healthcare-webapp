import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  template: `
     <login *ngIf="!authService.login"></login>
     <ng-container *ngIf="authService.login && appStateService.appState">
          <navbar></navbar>
          <sidebar></sidebar>
          <router-outlet></router-outlet>
     </ng-container>
  `,
  styles: []
})

export class AppComponent {

     constructor(
          public authService: AuthService,
          public appStateService: AppStateService
     ) { }
}
