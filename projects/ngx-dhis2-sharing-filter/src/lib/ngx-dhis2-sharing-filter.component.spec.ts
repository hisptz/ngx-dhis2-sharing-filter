import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDhis2SharingFilterComponent } from './ngx-dhis2-sharing-filter.component';

describe('NgxDhis2SharingFilterComponent', () => {
  let component: NgxDhis2SharingFilterComponent;
  let fixture: ComponentFixture<NgxDhis2SharingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDhis2SharingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDhis2SharingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
