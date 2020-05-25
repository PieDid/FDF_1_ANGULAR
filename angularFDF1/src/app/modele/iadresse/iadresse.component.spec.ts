import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAdresseComponent } from './iadresse.component';

describe('IAdresseComponent', () => {
  let component: IAdresseComponent;
  let fixture: ComponentFixture<IAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
