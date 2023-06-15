import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptaPSComponent } from './compta-ps.component';

describe('ComptaPSComponent', () => {
  let component: ComptaPSComponent;
  let fixture: ComponentFixture<ComptaPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptaPSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptaPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
