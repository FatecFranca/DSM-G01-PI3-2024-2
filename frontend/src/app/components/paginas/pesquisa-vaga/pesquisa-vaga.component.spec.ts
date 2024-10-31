import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaVagaComponent } from './pesquisa-vaga.component';

describe('PesquisaVagaComponent', () => {
  let component: PesquisaVagaComponent;
  let fixture: ComponentFixture<PesquisaVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesquisaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
