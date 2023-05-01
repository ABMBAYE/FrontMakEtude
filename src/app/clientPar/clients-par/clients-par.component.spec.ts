import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsParComponent } from './clients-par.component';

describe('ClientsParComponent', () => {
  let component: ClientsParComponent;
  let fixture: ComponentFixture<ClientsParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
