import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationEnd, Route } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var $: any

@Component({
     selector: 'sidebar',
     template: `
     <ul id="app-sidebar" class="sidenav">
          <li><a class="subheader">Services</a></li>
          <li [ngClass]="{'active':(current_nav==='medical')}">
               <a class="sidenav-close waves-effect" routerLink="/medical">Medical Condition</a>
          </li>
          <li [ngClass]="{'active':(current_nav==='health')}">
               <a class="sidenav-close waves-effect" routerLink="/health">Health Status</a>
          </li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Personal</a></li>
          <li [ngClass]="{'active':(current_nav==='profile')}">
               <a class="sidenav-close waves-effect" routerLink="/profile">Profile</a>
          </li>
          <li><div class="divider"></div></li>
          <li>
               <a class="sidenav-close waves-effect" (click)="sign_out()">Sign Out</a>
          </li>
     </ul>
  `,
     styles: []
})

export class SidebarComponent implements OnInit {

     current_nav: string

     constructor(
          public authService: AuthService,
          public router: Router
     ) { }

     ngOnInit() {
          this.current_nav = this.router.url.substr(1, this.router.url.length-1)
          this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
               this.current_nav = event.url.substr(1, event.url.length-1)
          })
     }

     ngAfterViewInit() {
          $(document).ready(() => {
               $('#app-sidebar').sidenav()
          })
     }

     sign_out() {
          this.authService.login = false
     }
}
