import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentdetailspageComponent } from './apartmentdetailspage.component';

describe('ApartmentdetailspageComponent', () => {
  let component: ApartmentdetailspageComponent;
  let fixture: ComponentFixture<ApartmentdetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentdetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
