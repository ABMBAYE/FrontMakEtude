import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateYearComponent } from './update-year.component';

describe('UpdateYearComponent', () => {
  let component: UpdateYearComponent;
  let fixture: ComponentFixture<UpdateYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
