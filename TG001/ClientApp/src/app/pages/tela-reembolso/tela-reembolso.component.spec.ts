import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaReembolsoComponent } from './tela-reembolso.component';

describe('TelaReembolsoComponent', () => {
  let component: TelaReembolsoComponent;
  let fixture: ComponentFixture<TelaReembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
