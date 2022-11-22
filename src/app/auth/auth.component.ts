import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter<any>();
  @Input() submitLabel: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'you must enter an email.';
    }
    return this.email.hasError('email')?'Not a valid email': '';
  }

  getPasswordErrorMessage() {
    if(this.password.hasError('required')){
      return 'you must enter a password.';
    }
    return '';
  }

  onSubmit() {
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value,
    });
  }

}
