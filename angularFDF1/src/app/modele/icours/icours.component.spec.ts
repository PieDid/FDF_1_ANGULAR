import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICoursComponent } from './icours.component';

describe('ICoursComponent', () => {
  let component: ICoursComponent;
  let fixture: ComponentFixture<ICoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
