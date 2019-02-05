import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentLoginPageComponent } from './resident-login-page.component';

describe('ResidentLoginPageComponent', () => {
  let component: ResidentLoginPageComponent;
  let fixture: ComponentFixture<ResidentLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
