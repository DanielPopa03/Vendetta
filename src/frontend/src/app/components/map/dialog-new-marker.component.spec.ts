import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewMarkerComponent } from './map.component';

describe('DialogNewMarkerComponent', () => {
  let component: DialogNewMarkerComponent;
  let fixture: ComponentFixture<DialogNewMarkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNewMarkerComponent]
    });
    fixture = TestBed.createComponent(DialogNewMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
