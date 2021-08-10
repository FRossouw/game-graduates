import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameCanvasTwoComponent } from './main-game-canvas-two.component';

describe('MainGameCanvasTwoComponent', () => {
  let component: MainGameCanvasTwoComponent;
  let fixture: ComponentFixture<MainGameCanvasTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameCanvasTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameCanvasTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
