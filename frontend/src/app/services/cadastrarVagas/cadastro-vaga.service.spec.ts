import { TestBed } from '@angular/core/testing';

import { CadastroVagaService } from './cadastro-vaga.service';

describe('CadastroVagaService', () => {
  let service: CadastroVagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroVagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
