import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaVagasService } from '../../../services/vagas/busca-vagas.service';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrl: './detalhamento.component.scss'
})
export class DetalhamentoComponent implements OnInit {
  readonly cifraoImg: string = "../../../../assets/img/cifrao.png";
  readonly localImg: string = "../../../../assets/img/pin-de-localizacao.png";

  vaga: any;

  constructor(
    private route: ActivatedRoute,
    private buscaVagasService: BuscaVagasService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.buscaVagasService.getVagaPorId(id).subscribe(vaga => {
          this.vaga = vaga;
        });
      }
    });
  }

}
