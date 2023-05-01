import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientCanadaComponent } from './update-client-canada.component';

describe('UpdateClientCanadaComponent', () => {
  let component: UpdateClientCanadaComponent;
  let fixture: ComponentFixture<UpdateClientCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientCanadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
