import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;

  countries: string[];
  selectedCountry: string;
  selectedGender: SelectItem;
  favoriteSeason: string;
  disabled = false;
  enteredAge: number;
  genders = ['Male', 'Female'];

  user: User;

  constructor(public userService: UserService, private router: Router) {
    this.countries = ['United States ', 'United Kingdom ', 'Australia'];
    this.selectedCountry = this.countries[0];
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);

    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(11)
      ]),
      country: new FormControl('United States '),
      gender: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, this.ageValidator])
    });
  }

  onSubmit() {
    const newUser: User = {
      id: null,
      username: this.signupForm.value.username,
      country: this.signupForm.value.country,
      age: this.signupForm.value.age,
      gender: this.signupForm.value.gender
    };

    this.userService.addUser(newUser);
    // this.userService.newUser.next(newUser);
    this.router.navigateByUrl('/chat');
  }

  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value < 18 || control.value > 100) {
      return { age: true };
    }
    return null;
  }
}
