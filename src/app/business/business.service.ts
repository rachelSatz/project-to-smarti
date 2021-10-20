
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError,of } from 'rxjs';
import { catchError,first } from 'rxjs/operators';
import { business } from './business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private apiURL ="http://localhost:8000/api/business/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<business[]> {
   return this.httpClient.get<business[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }



 create(business:business): Observable<business> {
   return this.httpClient.post<business>(this.apiURL, JSON.stringify(business), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:number): Observable<business> {
   return this.httpClient.get<business>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, business:business): Observable<business> {
   return this.httpClient.put<business>(this.apiURL + id, JSON.stringify(business), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<business>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error:any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
