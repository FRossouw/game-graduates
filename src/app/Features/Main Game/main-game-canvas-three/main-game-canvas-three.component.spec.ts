import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameCanvasThreeComponent } from './main-game-canvas-three.component';

describe('MainGameCanvasThreeComponent', () => {
  let component: MainGameCanvasThreeComponent;
  let fixture: ComponentFixture<MainGameCanvasThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameCanvasThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameCanvasThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
