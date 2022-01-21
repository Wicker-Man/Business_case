import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDashboardLoginComponent } from './form-dashboard-login.component';

describe('FormDashboardLoginComponent', () => {
  let component: FormDashboardLoginComponent;
  let fixture: ComponentFixture<FormDashboardLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDashboardLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDashboardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
