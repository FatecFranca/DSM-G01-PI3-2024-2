import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] 
})
export class NavbarComponent {

  readonly logoImg: string = "../../assets/img/logo.png";

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']); // Navega para a página inicial
  }

  navigateToAbout() {
    this.router.navigate(['/sobre']);
  }

  navigateTofatec() {
    this.router.navigate(['/fatec']);
  }
  
}

