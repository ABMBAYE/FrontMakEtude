import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientParComponent } from './add-client-par.component';

describe('AddClientParComponent', () => {
  let component: AddClientParComponent;
  let fixture: ComponentFixture<AddClientParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
