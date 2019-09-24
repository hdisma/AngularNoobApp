import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IProduct } from '../../models/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl: string = 'https://my-json-server.typicode.com/hdisma/demo/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(`${this.baseUrl}products`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  private handleError(handleError: HttpErrorResponse) {

    let errorMessage: string = '';

    if (handleError.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${handleError.error.message}`;
    } else {
      errorMessage = `Server returned code:  ${handleError.status}, error message is: ${handleError.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

}
