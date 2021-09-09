import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOutComponent } from './route-out.component';

describe('RouteOutComponent', () => {
  let component: RouteOutComponent;
  let fixture: ComponentFixture<RouteOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
