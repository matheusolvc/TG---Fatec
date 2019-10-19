import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoletosComponent } from './main-boletos.component';

describe('MainBoletosComponent', () => {
  let component: MainBoletosComponent;
  let fixture: ComponentFixture<MainBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
