import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.scss']
})
export class CardVagaComponent {
  @Input() vagas: any[] = [];
}
