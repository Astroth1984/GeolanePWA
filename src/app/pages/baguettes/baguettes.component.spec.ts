import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaguettesComponent } from './baguettes.component';

describe('BaguettesComponent', () => {
  let component: BaguettesComponent;
  let fixture: ComponentFixture<BaguettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaguettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaguettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
