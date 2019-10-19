import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarImpostosComponent } from './gerenciar-impostos.component';

describe('GerenciarImpostosComponent', () => {
  let component: GerenciarImpostosComponent;
  let fixture: ComponentFixture<GerenciarImpostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarImpostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarImpostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
