import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPersonneComponent } from './ipersonne.component';

describe('IPersonneComponent', () => {
  let component: IPersonneComponent;
  let fixture: ComponentFixture<IPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
