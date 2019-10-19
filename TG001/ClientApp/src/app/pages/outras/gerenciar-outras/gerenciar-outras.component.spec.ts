import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarOutrasComponent } from './gerenciar-outras.component';

describe('GerenciarOutrasComponent', () => {
  let component: GerenciarOutrasComponent;
  let fixture: ComponentFixture<GerenciarOutrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarOutrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarOutrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
