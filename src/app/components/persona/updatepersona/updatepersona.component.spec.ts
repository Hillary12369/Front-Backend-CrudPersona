import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepersonaComponent } from './updatepersona.component';

describe('UpdatepersonaComponent', () => {
  let component: UpdatepersonaComponent;
  let fixture: ComponentFixture<UpdatepersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
