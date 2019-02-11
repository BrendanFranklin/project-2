import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutbarComponent } from './logoutbar.component';

describe('LogoutbarComponent', () => {
  let component: LogoutbarComponent;
  let fixture: ComponentFixture<LogoutbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
