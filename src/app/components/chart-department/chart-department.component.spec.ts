import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDepartmentComponent } from './chart-department.component';

describe('ChartDepartmentComponent', () => {
  let component: ChartDepartmentComponent;
  let fixture: ComponentFixture<ChartDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartDepartmentComponent]
    });
    fixture = TestBed.createComponent(ChartDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
