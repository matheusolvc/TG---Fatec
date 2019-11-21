import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarReembolsoComponent } from './aprovar-reembolso.component';

describe('AprovarReembolsoComponent', () => {
  let component: AprovarReembolsoComponent;
  let fixture: ComponentFixture<AprovarReembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
