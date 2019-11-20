import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarContasComponent } from './pagar-contas.component';

describe('PagarContasComponent', () => {
  let component: PagarContasComponent;
  let fixture: ComponentFixture<PagarContasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarContasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
