import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameCanvasComponent } from './main-game-canvas.component';

describe('MainGameCanvasComponent', () => {
  let component: MainGameCanvasComponent;
  let fixture: ComponentFixture<MainGameCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
