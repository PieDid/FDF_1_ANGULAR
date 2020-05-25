import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IEtudiantComponent } from './ietudiant.component';

describe('IEtudiantComponent', () => {
  let component: IEtudiantComponent;
  let fixture: ComponentFixture<IEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
