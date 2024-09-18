import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendetaNavbarComponent } from './vendeta-navbar.component';

describe('VendetaNavbarComponent', () => {
  let component: VendetaNavbarComponent;
  let fixture: ComponentFixture<VendetaNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendetaNavbarComponent]
    });
    fixture = TestBed.createComponent(VendetaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
