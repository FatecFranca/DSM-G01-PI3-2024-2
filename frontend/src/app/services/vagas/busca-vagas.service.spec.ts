import { TestBed } from '@angular/core/testing';

import { BuscaVagasService } from './busca-vagas.service';

describe('BuscaVagasService', () => {
  let service: BuscaVagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaVagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
