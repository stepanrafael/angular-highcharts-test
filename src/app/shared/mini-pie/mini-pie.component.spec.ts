import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPieComponent } from './mini-pie.component';

describe('MiniPieComponent', () => {
  let component: MiniPieComponent;
  let fixture: ComponentFixture<MiniPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
