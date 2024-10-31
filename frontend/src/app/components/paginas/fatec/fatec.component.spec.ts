import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecComponent } from './fatec.component';

describe('FatecComponent', () => {
  let component: FatecComponent;
  let fixture: ComponentFixture<FatecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
