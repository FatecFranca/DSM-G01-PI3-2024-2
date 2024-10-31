import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss',
})
export class InicialComponent {
  
  readonly humana : string = "../../../assets/img/Humaaans.png"
  readonly tecjobs : string = "../../../../assets/img/TECJOBS.png"
  readonly chao : string = "../../../../assets/img/NoiseInicial.png"
  
}
