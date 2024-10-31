import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatecComponent } from './components/paginas/fatec/fatec.component';
import { InicialComponent } from './components/paginas/inicial/inicial.component';
import { CadastroVagasComponent } from './components/paginas/cadastro-vagas/cadastro-vagas.component';
import { LoginComponent } from './components/paginas/login/login.component';
import { PesquisaVagaComponent } from './components/paginas/pesquisa-vaga/pesquisa-vaga.component';
import { SobreComponent } from './components/paginas/sobre/sobre.component';
import { DetalhamentoComponent } from './components/paginas/detalhamento/detalhamento.component';
import { VagasComponent } from './components/paginas/vagas/vagas.component';

const routes: Routes = [
  { path: "", component: InicialComponent},
  { path: "sobre", component: SobreComponent},
  { path: "vagas", component: VagasComponent},
  { path: "pesquisa/:tipo", component: PesquisaVagaComponent},
  { path: "pesquisa", component: PesquisaVagaComponent},
  { path: "fatec", component: FatecComponent},
  { path: "login", component: LoginComponent},
  { path: "detalhamento", component: DetalhamentoComponent},
  { path: "detalhamento/:id", component: DetalhamentoComponent},
  { path: "cadastro", component: CadastroVagasComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
