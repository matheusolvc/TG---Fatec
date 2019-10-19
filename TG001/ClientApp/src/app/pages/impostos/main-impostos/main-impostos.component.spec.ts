import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImpostosComponent } from './main-impostos.component';

describe('MainImpostosComponent', () => {
  let component: MainImpostosComponent;
  let fixture: ComponentFixture<MainImpostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImpostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImpostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
