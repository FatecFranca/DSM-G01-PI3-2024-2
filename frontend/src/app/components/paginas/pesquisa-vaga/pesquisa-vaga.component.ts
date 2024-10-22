import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaVagasService } from '../../../services/vagas/busca-vagas.service';

@Component({
  selector: 'app-pesquisa-vaga',
  templateUrl: './pesquisa-vaga.component.html',
  styleUrls: ['./pesquisa-vaga.component.scss']
})
export class PesquisaVagaComponent implements OnInit {

  readonly meninoImg: string = "../../../assets/img/binoculo2.png";
  readonly lupaImg: string = "../../../assets/img/lupa.png";

  vagas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private buscaVagasService: BuscaVagasService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tipo = params.get('tipo')?? undefined;
      console.log(`Tipo de vaga: ${tipo}`); // Log para depuração
      this.buscaVagasService.getVagas(tipo).subscribe(vagas => {
        console.log('Vagas fetched:', vagas); // Log para depuração
        this.vagas = vagas;
      });
    });
  }
}
