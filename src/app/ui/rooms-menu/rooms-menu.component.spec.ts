import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsMenuComponent } from './rooms-menu.component';

describe('RoomsMenuComponent', () => {
  let component: RoomsMenuComponent;
  let fixture: ComponentFixture<RoomsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
