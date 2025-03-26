import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Добавляем импорты Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  authError = ''

  constructor(private router: Router) {}

  onSubmit() {
    if (this.LoginForm.valid) {
      console.log("DateForm:", this.LoginForm.value)

      if (this.LoginForm.value.email === "example@email.com" && this.LoginForm.value.password === "12345") {
        this.router.navigate(['/profile'])
      }
      else {
        this.authError = 'неверные данные'
        alert("Error Login or password")
      }
    }
  }
}
