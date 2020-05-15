import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoAngularComponent } from './proyecto-angular.component';

describe('ProyectoAngularComponent', () => {
  let component: ProyectoAngularComponent;
  let fixture: ComponentFixture<ProyectoAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
