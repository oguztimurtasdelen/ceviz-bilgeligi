import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPersonComponent } from './chart-person.component';

describe('ChartPersonComponent', () => {
  let component: ChartPersonComponent;
  let fixture: ComponentFixture<ChartPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartPersonComponent]
    });
    fixture = TestBed.createComponent(ChartPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
