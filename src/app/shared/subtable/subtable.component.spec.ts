import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtableComponent } from './subtable.component';

describe('SubtableComponent', () => {
  let component: SubtableComponent;
  let fixture: ComponentFixture<SubtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
