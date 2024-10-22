import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  user: { username: string, password: string } = { username: '', password: '' };

  constructor(private loginService: LoginService, private router : Router){}

  validaLogin() {
    const { username, password } = this.user;
    this.loginService.validaLogin(username, password).subscribe(
      response => {
        console.log('Login válido', response);
        if (response.success) {
          this.router.navigate(['/cadastro']); 
        } else {
          alert('Login inválido. Tente novamente.');
        }
      },
      error => {
        console.error('Erro ao validar login', error);
        alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
      }
    );
  }
}
