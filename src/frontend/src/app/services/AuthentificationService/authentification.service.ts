import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Token } from '../../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private static token: string | undefined;

  constructor(private http: HttpClient) { }

  get(url: string): any {
    return this.http.get("http://localhost:8080/public" + url);
  }

  // getPrivate(url: string): any {
  //   console.log(this.token)
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer ' + this.token,
  //     'Content-Type': 'application/json' // Specify content type as JSON
  //   });

  //   // Assuming 'data' is the JSON data you want to send in the body
  //   return this.http.get<any>("http://localhost:8080" + url, { headers: headers });
    
  // }
  getUserEmail(): Observable<any> {
    const token = AuthentificationService.token; // Replace with your actual token
    if(token !== undefined){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + AuthentificationService.token,
      'Content-Type': 'application/json' // Specify content type as JSON
    });
    return this.http.get<any>("http://localhost:8080/email", { headers: headers });
    }
    throw "Please sign in, you are not authentificated"
  }

  getPrivate(url: string): Observable<any> {
    const token = AuthentificationService.token; // Replace with your actual token
    if(token !== undefined){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + AuthentificationService.token,
      'Content-Type': 'application/json' // Specify content type as JSON
    });
    
    return this.http.get<any>("http://localhost:8080" + url, { headers: headers });
   
    }
    throw "Please sign in, you are not authentificated"
  }

  postPrivate(url:string, object: any): Observable<any> {
    const token = AuthentificationService.token; // Replace with your actual token
    
    if(token !== undefined){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + AuthentificationService.token,
      'Content-Type': 'application/json'
    });
    console.log("http://localhost:8080" + url, object, { headers: headers })
    this.http.post<any>("http://localhost:8080" + url, object, { headers: headers }).subscribe((res)=>console.log(res))
    // return this.http.post<any>("http://localhost:8080" + url, object, { headers: headers });
    }
    throw "Please sign in, you are not authentificated"
  }

  getAuthUrl(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Specify content type as JSON
    });
    return this.http.get<any>("http://localhost:8080/auth/url" , { headers: headers });
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:8080/auth/callback?code=" + code, {observe: "response"})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status === 200 && response.body !== null) {
          AuthentificationService.token = response.body.token;
          // localStorage.setItem("token", this.token)
          return true;
        } else {
          return false;
        }
      }));
  }
}
