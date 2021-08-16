import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNavigateComponent } from './button-navigate.component';

describe('ButtonNavigateComponent', () => {
  let component: ButtonNavigateComponent;
  let fixture: ComponentFixture<ButtonNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonNavigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
