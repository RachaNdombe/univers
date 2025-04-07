import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    Service: UserService = inject(UserService)
    router: Router = inject(Router)

    registerForm = new FormGroup ({
        fullName: new FormControl (''),
        email: new FormControl(''),
        password: new FormControl('')
    })

    save(){
      this.Service.register(
        this.registerForm.value.fullName??"",
        this.registerForm.value.email??"",
        this.registerForm.value.password??""
      ).then(response=>console.log(response))

      this.registerForm = new FormGroup({
        fullName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
      })
      this.router.navigate(['/login'])
    }
}
