import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarBoletosComponent } from './gerenciar-boletos.component';

describe('GerenciarBoletosComponent', () => {
  let component: GerenciarBoletosComponent;
  let fixture: ComponentFixture<GerenciarBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
