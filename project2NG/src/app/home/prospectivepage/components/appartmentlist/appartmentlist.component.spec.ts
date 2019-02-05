import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentlistComponent } from './appartmentlist.component';

describe('AppartmentlistComponent', () => {
  let component: AppartmentlistComponent;
  let fixture: ComponentFixture<AppartmentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartmentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
