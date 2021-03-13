import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassPageComponent } from './pass-page.component';

describe('PassPageComponent', () => {
  let component: PassPageComponent;
  let fixture: ComponentFixture<PassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
