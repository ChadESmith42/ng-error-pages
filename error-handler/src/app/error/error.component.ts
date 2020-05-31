import { Component, OnInit } from '@angular/core';
import { CustomError } from './custom-error';
import { ErrorService } from './error.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public error$: BehaviorSubject<CustomError>;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.error$ = this.errorService.currentError;
  }

}
