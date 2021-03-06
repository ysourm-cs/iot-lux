import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailComponent  } from './room-detail.component';

describe('RoomdetailsComponent', () => {
  let component: RoomDetailComponent ;
  let fixture: ComponentFixture<RoomDetailComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
