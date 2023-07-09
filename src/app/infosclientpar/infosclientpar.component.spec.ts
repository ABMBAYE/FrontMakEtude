import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosclientparComponent } from './infosclientpar.component';

describe('InfosclientparComponent', () => {
  let component: InfosclientparComponent;
  let fixture: ComponentFixture<InfosclientparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosclientparComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosclientparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
