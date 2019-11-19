import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContaComponent } from './table-conta.component';

describe('TableContaComponent', () => {
  let component: TableContaComponent;
  let fixture: ComponentFixture<TableContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
