import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientCanadaComponent } from './add-client-canada.component';

describe('AddClientCanadaComponent', () => {
  let component: AddClientCanadaComponent;
  let fixture: ComponentFixture<AddClientCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientCanadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
