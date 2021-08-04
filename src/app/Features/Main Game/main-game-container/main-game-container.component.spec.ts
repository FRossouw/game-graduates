import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameContainerComponent } from './main-game-container.component';

describe('MainGameContainerComponent', () => {
  let component: MainGameContainerComponent;
  let fixture: ComponentFixture<MainGameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
