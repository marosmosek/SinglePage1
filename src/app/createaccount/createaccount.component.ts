import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '../_services/';

@Component({
  selector: 'app-createaccount',
  templateUrl: 'createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})

export class CreateaccountComponent implements OnInit {
    Weak: boolean= true;Good: boolean= false;Excelent: boolean= false;
    status: string= "Weak";
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: [''],
            email: [''],
            password: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
    PassStrength(x){
      let password: string = x.value;
      let numberOfElements = 0;
      numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Lowercase letters
      numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Uppercase letters
      numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements;      // Numbers
      numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements;   // Special characters (inc. space)

      // Assume we have a poor password already
      let currentPasswordStrength = "Weak";
      // Check then strenth of this password using some simple rules
      if (password === null || password.length < 5) {
          currentPasswordStrength = "Weak";
          this.status = "Weak";
          this.Weak= true;this.Good= false;this.Excelent= false;
      } else if (numberOfElements === 0 || numberOfElements === 1 || numberOfElements === 2) {
          currentPasswordStrength = "Weak";
          this.status = "Weak";
          this.Weak= true;this.Good= false;this.Excelent= false;
      } else if (numberOfElements === 3) {
          currentPasswordStrength = "Good";
          this.status = "Good";
          this.Weak= false;this.Good= true;this.Excelent= false;
      } else {
          currentPasswordStrength = "Excelent";
          this.status = "Excelent";
          this.Weak= false;this.Good= false;this.Excelent= true;
      }
      console.log(x)
    }
}
