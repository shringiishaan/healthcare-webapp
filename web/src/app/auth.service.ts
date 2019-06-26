import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
     providedIn: 'root'
})

export class AuthService {

     login: boolean = false

     constructor(
          public rest: RestService
     ) { }

     authenticateUser(email, password): Promise<boolean> {
          return new Promise((resolve, reject) => {
               this.rest.login(email, password).then((success: boolean) => {
                    if(success) resolve(true)
                    else reject(null)
               }, (error) => reject(error))
          })
     }
}
