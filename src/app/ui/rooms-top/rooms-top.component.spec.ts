import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsTopComponent } from './rooms-top.component';

describe('RoomsTopComponent', () => {
  let component: RoomsTopComponent;
  let fixture: ComponentFixture<RoomsTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
