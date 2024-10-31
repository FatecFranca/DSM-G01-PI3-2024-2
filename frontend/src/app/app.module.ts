import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FatecComponent } from './components/paginas/fatec/fatec.component';
import { InicialComponent } from './components/paginas/inicial/inicial.component';
import { CadastroVagasComponent } from './components/paginas/cadastro-vagas/cadastro-vagas.component';
import { LoginComponent } from './components/paginas/login/login.component';
import { PesquisaVagaComponent } from './components/paginas/pesquisa-vaga/pesquisa-vaga.component';
import { SobreComponent } from './components/paginas/sobre/sobre.component';
import { CardVagaComponent } from './components/paginas/card-vaga/card-vaga.component';
import { DetalhamentoComponent } from './components/paginas/detalhamento/detalhamento.component';
import { VagasComponent } from './components/paginas/vagas/vagas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicialComponent,
    SobreComponent,
    VagasComponent,
    PesquisaVagaComponent,
    FatecComponent,
    LoginComponent,
    CardVagaComponent,
    DetalhamentoComponent,
    CadastroVagasComponent,

  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
