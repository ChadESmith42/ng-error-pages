import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error/error.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showError;
  constructor(public errorService: ErrorService, private router: Router) { }

  ngOnInit() {
  }

  public fourOhOne() {
    const four01 = new HttpErrorResponse({ status: 401, statusText: 'Unauthorized access.', error: 'ae455f4c-ad63-43e3-9a1f-a211261bdf6d'});
    this.errorService.HandleError(four01.status, four01.statusText, four01.error);
  }

  public fourOhFour() {
    const four04 = new HttpErrorResponse({ status: 404, statusText: 'Not found.', error: '519821dd-a387-43ba-b5af-fcd78ac3e61b'});
    this.errorService.HandleError(four04.status, four04.statusText, four04.error);
  }

  public fourOhNine() {
    const four09 = new HttpErrorResponse({ status: 409, statusText: 'Conflict.', error: '34672665-a54f-42ec-acee-81c24f9f3bf8'});
    this.errorService.HandleError(four09.status, four09.statusText, four09.error);
  }

  public imATeapot() {
    this.errorService.HandleError(418, `I'm a teapot.`, `See  RFC 2324, Hyper Text Coffee Pot Control Protocol`);
  }

  public fiveHundred() {
    const five00 = new HttpErrorResponse({ status: 500, statusText: 'Server error.', error: '0e6ad49f-cff3-4258-ba68-4e378328f8fd'});
    this.errorService.HandleError(five00.status, five00.statusText, five00.error);

  }

  public tripleNine() {
    const nine99 = new HttpErrorResponse({
      headers: new HttpHeaders({auth: 'Its Bob'}),
      status: 999,
      statusText: `PEBKAC: Problem exists between keyboard and chair. Have you tried turning it off and on again?`,
      error: 'da5936be-1949-4487-ab89-d85f436a2b2e'});
    this.errorService.HandleError(nine99.status, nine99.statusText, nine99.error);
  }

  public fourHundred() {
    const four00 = new HttpErrorResponse({ status: 400, statusText: 'Generic error.', error: '51fb8d0b-68ad-4c42-ac44-9dca3f053d2a'});
    this.errorService.HandleError(four00.status, four00.statusText, four00.error);
  }

}
