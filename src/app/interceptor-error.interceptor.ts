import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class InterceptError implements HttpInterceptor {
  constructor(private readonly toast:ToastrService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Inside Interceptor");
    
 
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.toast.success("Got real data", 'Success');
    
      }
      }),
      catchError((error: HttpErrorResponse) => {
        this.toast.error("Unauthorized Access", 'Error');
      

     
        return throwError(error);
      })
    );
  }
}