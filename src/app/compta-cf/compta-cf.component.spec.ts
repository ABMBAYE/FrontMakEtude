import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptaCFComponent } from './compta-cf.component';

describe('ComptaCFComponent', () => {
  let component: ComptaCFComponent;
  let fixture: ComponentFixture<ComptaCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptaCFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptaCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
