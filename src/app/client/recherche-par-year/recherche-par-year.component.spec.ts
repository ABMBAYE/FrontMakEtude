import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParYearComponent } from './recherche-par-year.component';

describe('RechercheParYearComponent', () => {
  let component: RechercheParYearComponent;
  let fixture: ComponentFixture<RechercheParYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
