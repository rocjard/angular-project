import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsComponent } from './ps.component';

describe('PsComponent', () => {
  let component: PsComponent;
  let fixture: ComponentFixture<PsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsComponent]
    });
    fixture = TestBed.createComponent(PsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
