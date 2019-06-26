import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
     providedIn: 'root'
})

export class RestService {
     
     api_host: string = "http://139.59.2.78:5011"

     constructor(
          public http: HttpClient
     ) { }

     login(email: string, password: string): Promise<boolean> {
          let body = { email: email, password: password }
          return new Promise((resolve, reject) => {
               this.http.post(`${this.api_host}/login`, body).subscribe((data: any) => {
                    if(data.success) resolve(true)
                    else reject(data.error)
               }, (response) => {
                    if(response.status === 401) {
                         reject(new Error("Invalid Credentials"))
                    }
                    else reject(response)
               })
          })
     }

     getPatientHealthInfo(email): Promise<AppState> {
          let body = { email: email }
          return new Promise((resolve, reject) => {
               this.http.post(`${this.api_host}/getPatientHealthInfo`, body).subscribe((data: any) => {
                    if(data.success) resolve(data.data)
                    else reject(data.error)
               }, (response) => {
                    if(response.status === 401) {
                         reject(new Error("Invalid Credentials"))
                    }
                    else reject(response)
               })
          })
     }
}
