import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroVagaService } from '../../../services/cadastrarVagas/cadastro-vaga.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrls: ['./cadastro-vagas.component.scss']  // Corrigido o nome para styleUrls
})
export class CadastroVagasComponent implements OnInit {

  vagaForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroVagaService: CadastroVagaService) {
    this.vagaForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      localizacao: ['', Validators.required],
      link: ['', Validators.required],
      data_publicacao: ['', Validators.required],
      requisitos: ['', Validators.required],
      salario: ['', Validators.required],
      emprego_id: [1, Validators.required]  // Garantir que emprego_id é requerido
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.vagaForm.valid) {
      const formValue = this.vagaForm.value;

      // Converte descricao, emprego_id e salario para números

      formValue.emprego_id = Number(formValue.emprego_id);

      this.cadastroVagaService.cadastrarVaga(formValue).subscribe(response => {
        console.log('Vaga cadastrada com sucesso!', response);
      }, error => {
        console.error('Erro ao cadastrar vaga', error);
      });
    }
  }


  // // Função para converter o salário em número
  // convertSalarioToNumber(salario: string): number {
  //   // Remove caracteres não numéricos (exceto pontos e vírgulas) e converte para número
  //   return Number(salario.replace(/[^\d.-]/g, ''));
  // }
}
