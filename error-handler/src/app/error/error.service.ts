import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomError } from './custom-error';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for handling error state within an application.
 */
export class ErrorService {

  private status: number;
  private message: string;
  private traceId: string;
  private httpError: HttpErrorResponse;
  public currentError: BehaviorSubject<CustomError> =
    new BehaviorSubject<CustomError>({ status: 400, message: 'Oops.', traceId: 'c045fd08-96c6-4cc6-a2f4-3bdaac67f2b4'});
  private showError = false;

  constructor(private router: Router) { }

  /**
   * Builds a custom error object using either an HttpErrorResponse or
   * a message, status, and trace information from an error handler.
   */
  public CurrentError() {
    let e: CustomError;
    if (this.httpError) {
      e = {
        status: this.httpError.status,
        message: this.httpError.statusText,
        traceId: this.httpError.error.prototype.message
      };
    } else {
      e = {
        status: this.status,
        message: this.message,
        traceId: this.traceId
      };
    }
    this.currentError.next(e);
  }

  /**
   * Generic error handler that accepts necessary params for generating correct error page.
   * @param status Error Code for error page.
   * @param message Plain English description of error for end-user.
   * @param traceId Any trouble-shooting information that may help with debugging.
   */
  public HandleError(status: number, message: string, traceId: any | string): void {
    const e: CustomError = {
      status,
      message,
      traceId
    };
    this.currentError.next(e);
  }

  public ToggleError() {
    this.showError = !this.showError;
  }
}
