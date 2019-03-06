import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintformComponent } from './maintform.component';

describe('MaintformComponent', () => {
  let component: MaintformComponent;
  let fixture: ComponentFixture<MaintformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
