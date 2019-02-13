import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManmaintComponent } from './manmaint.component';

describe('ManmaintComponent', () => {
  let component: ManmaintComponent;
  let fixture: ComponentFixture<ManmaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManmaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
