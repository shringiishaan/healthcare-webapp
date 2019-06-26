import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { MedicalComponent } from './medical.component';
import { HealthComponent } from './health.component';

const routes: Routes = [
     { path: 'medical', component: MedicalComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'health', component: HealthComponent },
     { path: '', redirectTo: '/profile', pathMatch: 'full' }, 
     { path: '**', redirectTo: '/profile' }
]

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }