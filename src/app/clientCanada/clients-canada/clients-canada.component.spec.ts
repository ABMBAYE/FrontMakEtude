import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCanadaComponent } from './clients-canada.component';

describe('ClientsCanadaComponent', () => {
  let component: ClientsCanadaComponent;
  let fixture: ComponentFixture<ClientsCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsCanadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
