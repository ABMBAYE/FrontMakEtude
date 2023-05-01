import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientParComponent } from './update-client-par.component';

describe('UpdateClientParComponent', () => {
  let component: UpdateClientParComponent;
  let fixture: ComponentFixture<UpdateClientParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
