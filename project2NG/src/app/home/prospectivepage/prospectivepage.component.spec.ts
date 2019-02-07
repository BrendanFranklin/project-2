import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectivepageComponent } from './prospectivepage.component';

describe('ProspectivepageComponent', () => {
  let component: ProspectivepageComponent;
  let fixture: ComponentFixture<ProspectivepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectivepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
