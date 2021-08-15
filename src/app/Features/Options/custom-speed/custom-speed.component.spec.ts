import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpeedComponent } from './custom-speed.component';

describe('CustomSpeedComponent', () => {
  let component: CustomSpeedComponent;
  let fixture: ComponentFixture<CustomSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
