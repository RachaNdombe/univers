import { Component,inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink , Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  Service: UserService= inject (UserService)
  router: Router= inject(Router)

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })
  save() {
    this.Service.login(
      this.loginForm.value.email ?? "",
      this.loginForm.value.password ?? ""
    ).then(() => {
      // Si la promesse réussit, l'utilisateur est authentifié
      this.router.navigate(['/voir']);
    }).catch(error => {
      // Gérer les erreurs de la promesse
      console.error('Erreur lors de l\'authentification', error);
      // Afficher un message d'erreur à l'utilisateur (facultatif)
      alert('Authentification échouée. Vérifiez vos informations de connexion.');
    });
    
    // Réinitialiser le formulaire après la tentative de connexion
    this.loginForm.reset();
  }
    
}
