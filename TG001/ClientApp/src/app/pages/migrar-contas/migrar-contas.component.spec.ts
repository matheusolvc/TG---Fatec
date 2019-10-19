import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrarContasComponent } from './migrar-contas.component';

describe('MigrarContasComponent', () => {
  let component: MigrarContasComponent;
  let fixture: ComponentFixture<MigrarContasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrarContasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrarContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
