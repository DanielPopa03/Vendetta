import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoMarkerComponent } from './map.component';

describe('DialogInfoMarkerComponent', () => {
  let component: DialogInfoMarkerComponent;
  let fixture: ComponentFixture<DialogInfoMarkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInfoMarkerComponent]
    });
    fixture = TestBed.createComponent(DialogInfoMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
