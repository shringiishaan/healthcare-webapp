import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
     <nav>
          <div class="nav-wrapper">
               <a href="#!" data-target="app-sidebar" class="sidenav-trigger show-on-small show-on-medium-and-up"><i class="material-icons">menu</i>Hello</a>
               <a href="#!" class="brand-logo right" style="margin-right:1em;"><i class="material-icons">local_hospital</i>Health Care</a>
          </div>
     </nav>
  `,
  styles: []
})

export class NavbarComponent implements OnInit {

     constructor() { }

     ngOnInit() {
     }

}
