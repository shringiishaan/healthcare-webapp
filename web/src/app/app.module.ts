import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar.component';
import { NavbarComponent } from './navbar.component';
import { MedicalComponent } from './medical.component';
import { HealthComponent } from './health.component';

@NgModule({
     declarations: [
          AppComponent,
          LoginComponent,
          ProfileComponent,
          SidebarComponent,
          NavbarComponent,
          MedicalComponent,
          HealthComponent
     ],
     imports: [
          BrowserModule,
          HttpClientModule,
          AppRoutingModule,
          FormsModule
     ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
