import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOutrasComponent } from './main-outras.component';

describe('MainOutrasComponent', () => {
  let component: MainOutrasComponent;
  let fixture: ComponentFixture<MainOutrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOutrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOutrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
