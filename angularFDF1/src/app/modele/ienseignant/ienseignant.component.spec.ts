import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IEnseignantComponent } from './ienseignant.component';

describe('IEnseignantComponent', () => {
  let component: IEnseignantComponent;
  let fixture: ComponentFixture<IEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
