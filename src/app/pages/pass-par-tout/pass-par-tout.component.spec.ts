import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassParToutComponent } from './pass-par-tout.component';

describe('PassParToutComponent', () => {
  let component: PassParToutComponent;
  let fixture: ComponentFixture<PassParToutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassParToutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassParToutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
