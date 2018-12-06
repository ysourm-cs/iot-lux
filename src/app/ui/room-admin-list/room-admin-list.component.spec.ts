import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdminListComponent } from './room-admin-list.component';

describe('RoomAdminListComponent', () => {
  let component: RoomAdminListComponent;
  let fixture: ComponentFixture<RoomAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
