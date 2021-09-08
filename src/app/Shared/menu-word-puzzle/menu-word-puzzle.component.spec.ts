import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWordPuzzleComponent } from './menu-word-puzzle.component';

describe('MenuWordPuzzleComponent', () => {
  let component: MenuWordPuzzleComponent;
  let fixture: ComponentFixture<MenuWordPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWordPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWordPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
