import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdminDetailComponent } from './room-admin-detail.component';

describe('RoomAdminDetailComponent', () => {
  let component: RoomAdminDetailComponent;
  let fixture: ComponentFixture<RoomAdminDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAdminDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
