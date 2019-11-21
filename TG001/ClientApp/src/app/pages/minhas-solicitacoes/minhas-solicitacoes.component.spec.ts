import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasSolicitacoesComponent } from './minhas-solicitacoes.component';

describe('MinhasSolicitacoesComponent', () => {
  let component: MinhasSolicitacoesComponent;
  let fixture: ComponentFixture<MinhasSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
