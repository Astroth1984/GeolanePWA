import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramTypeComponent } from './fram-type.component';

describe('FramTypeComponent', () => {
  let component: FramTypeComponent;
  let fixture: ComponentFixture<FramTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
